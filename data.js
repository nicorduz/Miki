// Edit this file to personalize the app.
// Replace image paths with your real photos inside assets/moments.
// Example: image: "assets/moments/kyoto-dinner.jpg"

const CONTACT_PHONE = "+8107090503851";

const COPY = {
  en: {
    eyebrow: "A quiet place for small memories",
    title: "Miki, For when today feels like a lot",
    introLabel: "Start here",
    introTitle: "How are you feeling right now?",
    introText: "Pick a mood. The app will show one random memory and a few gentle options, only if any of them feel right.",
    privacyNote: "Nothing is saved, tracked, or sent automatically.",
    moodTitle: "Choose a mood",
    randomMood: "Surprise me",
    photoPlaceholder: "Replace this with your own photo",
    anotherMemory: "Show another memory",
    reset: "Start over",
    actionsLabel: "Possible next step",
    actionsTitle: "What would help most?",
    actionsIntro: "Choose anything below only if you feel comfortable. Each button prepares an option, it does not send anything automatically.",
    messageTitle: "Prepared message",
    copyMessage: "Copy",
    openSms: "Open SMS",
    copied: "Copied",
    respectTitle: "One more option",
    respectText: "If you need quiet time, that is completely okay too. You do not have to reply, explain, or decide anything today.",
    footerText: "Made to be gentle, private, and respectful.",
    defaultTitle: "Select a mood to open a memory",
    defaultCaption: "Your shared moments will appear here. Replace the placeholder images in the assets/moments folder."
  },
  ja: {
    eyebrow: "小さな思い出のための静かな場所",
    title: "今日が少し重く感じるときに",
    introLabel: "ここから",
    introTitle: "今、どんな気持ち？",
    introText: "気分を選ぶと、その気持ちに近い思い出をひとつ表示します。必要なら、やさしい選択肢も使えます。",
    privacyNote: "自動で保存、追跡、送信されるものはありません。",
    moodTitle: "気分を選ぶ",
    randomMood: "おまかせ",
    photoPlaceholder: "ここを自分たちの写真に置き換えてください",
    anotherMemory: "別の思い出を見る",
    reset: "最初に戻る",
    actionsLabel: "次の小さな選択肢",
    actionsTitle: "今、何が少し助けになる？",
    actionsIntro: "無理に選ばなくて大丈夫です。ボタンは選択肢を用意するだけで、自動送信はしません。",
    messageTitle: "用意されたメッセージ",
    copyMessage: "コピー",
    openSms: "SMSを開く",
    copied: "コピーしました",
    respectTitle: "もうひとつの選択肢",
    respectText: "静かな時間が必要なら、それも大丈夫。今日、返信したり、説明したり、何かを決めたりしなくていいです。",
    footerText: "やさしく、プライベートに、相手を尊重するために作りました。",
    defaultTitle: "気分を選ぶと思い出が表示されます",
    defaultCaption: "ここに二人の思い出が表示されます。assets/moments フォルダの画像を置き換えてください。"
  }
};

const MOODS = [
  {
    id: "happy",
    emoji: "🌤️",
    en: { name: "Happy", helper: "Keep the light feeling going." },
    ja: { name: "うれしい", helper: "その明るい気持ちを少し続ける。" }
  },
  {
    id: "sad",
    emoji: "🌧️",
    en: { name: "Sad", helper: "Something soft and calm." },
    ja: { name: "かなしい", helper: "少しだけやさしく落ち着く。" }
  },
  {
    id: "angry",
    emoji: "🔥",
    en: { name: "Angry", helper: "Space, patience, no pressure." },
    ja: { name: "怒っている", helper: "距離と時間を大切にする。" }
  },
  {
    id: "tired",
    emoji: "🌙",
    en: { name: "Tired", helper: "Low effort, easy comfort." },
    ja: { name: "疲れた", helper: "がんばらなくていい安心感。" }
  },
  {
    id: "hungry",
    emoji: "🍜",
    en: { name: "Hungry", helper: "Food usually helps." },
    ja: { name: "お腹すいた", helper: "おいしいものが助けになるかも。" }
  },
  {
    id: "bored",
    emoji: "🎲",
    en: { name: "Bored", helper: "A tiny change of scene." },
    ja: { name: "退屈", helper: "少しだけ気分転換。" }
  },
  {
    id: "stressed",
    emoji: "🫧",
    en: { name: "Stressed", helper: "One thing at a time." },
    ja: { name: "ストレス", helper: "ひとつずつで大丈夫。" }
  },
  {
    id: "lonely",
    emoji: "🕯️",
    en: { name: "Lonely", helper: "Warmth, but only if wanted." },
    ja: { name: "さみしい", helper: "必要なら、少しのぬくもりを。" }
  },
  {
    id: "confused",
    emoji: "🧭",
    en: { name: "Confused", helper: "No need to decide now." },
    ja: { name: "迷っている", helper: "今すぐ決めなくて大丈夫。" }
  },
  {
    id: "grateful",
    emoji: "🌸",
    en: { name: "Grateful", helper: "Remember something gentle." },
    ja: { name: "ありがたい", helper: "やさしい記憶を思い出す。" }
  }
];

const MOMENTS = [
  {
    id: "moment-01",
    image: "assets/moments/moment-01.jpg",
    moods: ["happy", "grateful", "bored"],
    en: { title: "A day that felt easy", caption: "One of those small moments that did not need to be perfect to feel meaningful." },
    ja: { title: "自然に楽しかった日", caption: "完璧じゃなくても、なぜか心に残る小さな時間。" }
  },
  {
    id: "moment-02",
    image: "assets/moments/moment-02.jpg",
    moods: ["sad", "lonely", "tired"],
    en: { title: "A quiet memory", caption: "A reminder that gentle days existed, and they can exist again in a different way." },
    ja: { title: "静かな思い出", caption: "やさしい日があったこと、そして違う形でもまた作れるかもしれないこと。" }
  },
  {
    id: "moment-03",
    image: "assets/moments/moment-03.jpg",
    moods: ["hungry", "happy", "bored"],
    en: { title: "Food made the day better", caption: "Some days are improved by one good meal and a softer pace." },
    ja: { title: "ごはんで少し良くなった日", caption: "おいしいものとゆっくりした時間で、少し救われる日もある。" }
  },
  {
    id: "moment-04",
    image: "assets/moments/moment-04.jpg",
    moods: ["angry", "confused", "stressed"],
    en: { title: "A pause before words", caption: "Some feelings need space before they can become clear." },
    ja: { title: "言葉の前の休憩", caption: "気持ちがはっきりするまで、少し時間が必要なこともある。" }
  },
  {
    id: "moment-05",
    image: "assets/moments/moment-05.jpg",
    moods: ["tired", "stressed", "sad"],
    en: { title: "Rest is allowed", caption: "No big plan, no pressure. Just a reminder to breathe and take care of yourself." },
    ja: { title: "休んでもいい", caption: "大きな予定も、無理もなし。ただ少し深呼吸して、自分を大切にする時間。" }
  },
  {
    id: "moment-06",
    image: "assets/moments/moment-06.jpg",
    moods: ["bored", "happy", "confused"],
    en: { title: "A tiny adventure", caption: "Even a small change of place can make the day feel lighter." },
    ja: { title: "小さな冒険", caption: "少し場所を変えるだけで、今日が軽く感じることもある。" }
  },
  {
    id: "moment-07",
    image: "assets/moments/moment-07.jpg",
    moods: ["lonely", "sad", "grateful"],
    en: { title: "A warm ordinary moment", caption: "Not every meaningful memory is loud. Some are quiet and simple." },
    ja: { title: "あたたかい普通の時間", caption: "大切な思い出は、いつも派手とは限らない。静かでシンプルなものもある。" }
  },
  {
    id: "moment-08",
    image: "assets/moments/moment-08.jpg",
    moods: ["hungry", "tired", "stressed"],
    en: { title: "Dinner can be a reset", caption: "A meal, a seat, and a calmer hour can sometimes change the whole mood." },
    ja: { title: "ごはんでリセット", caption: "食事と座れる場所と、少し落ち着いた時間。それだけで気分が変わることもある。" }
  },
  {
    id: "moment-09",
    image: "assets/moments/moment-09.jpg",
    moods: ["happy", "grateful", "lonely"],
    en: { title: "Something worth smiling about", caption: "A small reminder that there were moments with real warmth." },
    ja: { title: "笑顔になれる記憶", caption: "本当にあたたかかった時間があったことを思い出すために。" }
  },
  {
    id: "moment-10",
    image: "assets/moments/moment-10.jpg",
    moods: ["angry", "stressed", "confused"],
    en: { title: "No rush", caption: "It is okay to feel what you feel before choosing what comes next." },
    ja: { title: "急がなくていい", caption: "次を決める前に、今の気持ちをそのまま感じても大丈夫。" }
  },
  {
    id: "moment-11",
    image: "assets/moments/moment-11.jpg",
    moods: ["bored", "happy", "hungry"],
    en: { title: "A small plan could help", caption: "Coffee, dinner, a walk, or something simple. No pressure, just an option." },
    ja: { title: "小さな予定が助けになるかも", caption: "コーヒー、夕食、散歩、何でもないこと。無理ではなく、ただの選択肢。" }
  },
  {
    id: "moment-12",
    image: "assets/moments/moment-12.jpg",
    moods: ["tired", "lonely", "grateful"],
    en: { title: "Soft light, soft pace", caption: "A reminder that you deserve gentleness, especially on heavy days." },
    ja: { title: "やわらかい光とペース", caption: "重い日ほど、やさしさを受け取っていいということ。" }
  }
];

const ACTIONS = [
  {
    id: "call",
    icon: "☎️",
    moods: ["happy", "sad", "lonely", "confused", "stressed"],
    type: "call",
    en: {
      title: "Call me",
      subtitle: "Only if talking would help.",
      message: "Can we talk for a little bit when you have time?"
    },
    ja: {
      title: "電話する",
      subtitle: "話すことで少し楽になるなら。",
      message: "時間があるとき、少しだけ話せる？"
    }
  },
  {
    id: "dinner",
    icon: "🍽️",
    moods: ["hungry", "happy", "sad", "bored", "tired"],
    type: "message",
    en: {
      title: "Reserve dinner or lunch",
      subtitle: "A calm meal, no pressure.",
      message: "Could we have lunch or dinner sometime? Something calm and easy."
    },
    ja: {
      title: "ランチ・ディナーを予約",
      subtitle: "落ち着いた食事。無理はなし。",
      message: "今度、ランチかディナーに行ける？落ち着いた感じで、無理なく。"
    }
  },
  {
    id: "work",
    icon: "💻",
    moods: ["stressed", "tired", "confused", "angry"],
    type: "message",
    en: {
      title: "Ask for help with work",
      subtitle: "Tasks, English, documents, or planning.",
      message: "Could you help me with something for work? I only need a little support."
    },
    ja: {
      title: "仕事を手伝ってもらう",
      subtitle: "タスク、英語、資料、整理など。",
      message: "仕事のことで少し手伝ってもらえる？少しだけサポートがほしい。"
    }
  },
  {
    id: "gift",
    icon: "🎁",
    moods: ["sad", "tired", "lonely", "grateful", "happy"],
    type: "message",
    en: {
      title: "Ask for a surprise gift",
      subtitle: "Something small to brighten the day.",
      message: "A small surprise would make today feel better."
    },
    ja: {
      title: "小さなサプライズをお願いする",
      subtitle: "今日を少し明るくするもの。",
      message: "小さなサプライズがあったら、今日少し元気になれそう。"
    }
  },
  {
    id: "trip",
    icon: "🧳",
    moods: ["bored", "happy", "stressed", "confused"],
    type: "message",
    en: {
      title: "Plan a small trip",
      subtitle: "Even a day plan can count.",
      message: "Could you organize a small trip or day plan? Something simple would be nice."
    },
    ja: {
      title: "小さな旅行を考えてもらう",
      subtitle: "日帰りでも十分。",
      message: "小さな旅行か日帰りプランを考えてくれる？シンプルなものでいい。"
    }
  },
  {
    id: "english",
    icon: "📚",
    moods: ["stressed", "confused", "bored", "tired"],
    type: "message",
    en: {
      title: "Practice English",
      subtitle: "Messages, pronunciation, interview, or work English.",
      message: "Could you help me practice English a little?"
    },
    ja: {
      title: "英語を練習する",
      subtitle: "メッセージ、発音、面接、仕事の英語など。",
      message: "少し英語の練習を手伝ってくれる？"
    }
  },
  {
    id: "walk",
    icon: "🚶",
    moods: ["angry", "stressed", "sad", "bored"],
    type: "message",
    en: {
      title: "Take a quiet walk",
      subtitle: "No heavy conversation required.",
      message: "Could we take a quiet walk sometime? No heavy talk needed."
    },
    ja: {
      title: "静かに散歩する",
      subtitle: "重い話をしなくても大丈夫。",
      message: "今度、静かに散歩できる？重い話はしなくても大丈夫。"
    }
  },
  {
    id: "coffee",
    icon: "☕",
    moods: ["tired", "bored", "lonely", "happy"],
    type: "message",
    en: {
      title: "Coffee or tea",
      subtitle: "Short, simple, easy.",
      message: "Could we get coffee or tea sometime? Short and simple is okay."
    },
    ja: {
      title: "コーヒーかお茶",
      subtitle: "短く、シンプルに、気軽に。",
      message: "今度、コーヒーかお茶に行ける？短くて気軽な感じで大丈夫。"
    }
  },
  {
    id: "space",
    icon: "🕊️",
    moods: ["angry", "confused", "tired", "stressed", "sad"],
    type: "message",
    en: {
      title: "Ask for space",
      subtitle: "A clear, respectful option.",
      message: "I need a little quiet time. Please give me some space for now."
    },
    ja: {
      title: "少し距離を置く",
      subtitle: "はっきり伝えられる選択肢。",
      message: "今は少し静かな時間が必要です。しばらく距離を置かせてください。"
    }
  }
];
