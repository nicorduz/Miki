const state = {
  lang: localStorage.getItem("memoryAppLang") || "en",
  moodId: null,
  currentMomentId: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const moodGrid = $("#moodGrid");
const actionList = $("#actionList");
const memoryImage = $("#memoryImage");
const imageFallback = $("#imageFallback");
const selectedMoodLabel = $("#selectedMoodLabel");
const memoryTitle = $("#memoryTitle");
const memoryCaption = $("#memoryCaption");
const messageBox = $("#messageBox");
const preparedMessage = $("#preparedMessage");
const smsLink = $("#smsLink");
const copyBtn = $("#copyBtn");

function t(key) {
  return COPY[state.lang][key] || COPY.en[key] || key;
}

function getLocalized(item) {
  return item[state.lang] || item.en;
}

function translateStaticText() {
  document.body.dataset.lang = state.lang;
  document.documentElement.lang = state.lang === "ja" ? "ja" : "en";

  $$("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
  });

  $$(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });

  if (!state.moodId) {
    memoryTitle.textContent = t("defaultTitle");
    memoryCaption.textContent = t("defaultCaption");
    selectedMoodLabel.textContent = state.lang === "ja" ? "思い出" : "Memory";
  } else {
    renderSelectedMood();
  }
}

function renderMoods() {
  moodGrid.innerHTML = "";

  MOODS.forEach((mood) => {
    const label = getLocalized(mood);
    const button = document.createElement("button");
    button.className = "mood-btn";
    button.type = "button";
    button.dataset.mood = mood.id;
    button.innerHTML = `
      <span class="mood-icon" aria-hidden="true">${mood.emoji}</span>
      <span class="mood-name">${label.name}</span>
      <span class="mood-helper">${label.helper}</span>
    `;
    button.addEventListener("click", () => selectMood(mood.id));
    moodGrid.appendChild(button);
  });
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function selectMood(moodId) {
  state.moodId = moodId;
  messageBox.classList.add("hidden");

  const availableMoments = MOMENTS.filter((moment) => moment.moods.includes(moodId));
  const moment = randomItem(availableMoments.length ? availableMoments : MOMENTS);
  state.currentMomentId = moment.id;

  renderSelectedMood();
  renderActions();

  $("#resultPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSelectedMood() {
  $$(".mood-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.mood === state.moodId);
  });

  const mood = MOODS.find((item) => item.id === state.moodId);
  const moment = MOMENTS.find((item) => item.id === state.currentMomentId);

  if (!mood || !moment) return;

  const moodLabel = getLocalized(mood);
  const momentText = getLocalized(moment);

  selectedMoodLabel.textContent = `${mood.emoji} ${moodLabel.name}`;
  memoryTitle.textContent = momentText.title;
  memoryCaption.textContent = momentText.caption;

  memoryImage.src = moment.image;
  memoryImage.alt = momentText.title;
  imageFallback.classList.add("hidden");
}

function renderActions() {
  actionList.innerHTML = "";

  if (!state.moodId) return;

  const matchedActions = ACTIONS.filter((action) => action.moods.includes(state.moodId));

  matchedActions.forEach((action) => {
    const actionText = getLocalized(action);
    const button = document.createElement("button");
    button.className = "action-btn";
    button.type = "button";
    button.innerHTML = `
      <span class="action-icon" aria-hidden="true">${action.icon}</span>
      <span class="action-text">
        <span class="action-title">${actionText.title}</span>
        <span class="action-subtitle">${actionText.subtitle}</span>
      </span>
    `;

    button.addEventListener("click", () => handleAction(action));
    actionList.appendChild(button);
  });
}

function handleAction(action) {
  const actionText = getLocalized(action);

  if (action.type === "call") {
    window.location.href = `tel:${CONTACT_PHONE}`;
    return;
  }

  preparedMessage.textContent = actionText.message;
  smsLink.href = `sms:${CONTACT_PHONE}?&body=${encodeURIComponent(actionText.message)}`;
  messageBox.classList.remove("hidden");
}

function showAnotherMemory() {
  if (!state.moodId) {
    selectMood(randomItem(MOODS).id);
    return;
  }

  const availableMoments = MOMENTS.filter((moment) => (
    moment.moods.includes(state.moodId) && moment.id !== state.currentMomentId
  ));
  const moment = randomItem(availableMoments.length ? availableMoments : MOMENTS);
  state.currentMomentId = moment.id;
  renderSelectedMood();
}

function resetApp() {
  state.moodId = null;
  state.currentMomentId = null;
  messageBox.classList.add("hidden");
  actionList.innerHTML = "";
  memoryImage.removeAttribute("src");
  memoryImage.alt = "";
  imageFallback.classList.remove("hidden");
  translateStaticText();

  $$(".mood-btn").forEach((button) => button.classList.remove("active"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("memoryAppLang", lang);
  translateStaticText();
  renderMoods();
  renderActions();

  if (state.moodId) {
    renderSelectedMood();
  }
}

memoryImage.addEventListener("error", () => {
  imageFallback.classList.remove("hidden");
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(preparedMessage.textContent);
    const original = copyBtn.textContent;
    copyBtn.textContent = t("copied");
    setTimeout(() => {
      copyBtn.textContent = original;
    }, 1200);
  } catch (error) {
    alert(preparedMessage.textContent);
  }
});

$("#newMemoryBtn").addEventListener("click", showAnotherMemory);
$("#resetBtn").addEventListener("click", resetApp);
$("#randomMoodBtn").addEventListener("click", () => selectMood(randomItem(MOODS).id));

$$(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

translateStaticText();
renderMoods();
resetApp();
