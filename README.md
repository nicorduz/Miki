# Memory Mood App

A private bilingual English/Japanese static web app that lets someone choose a mood, see a random shared memory, and choose a gentle next step such as calling, asking for dinner, asking for work help, asking for English help, or requesting space.

The app is intentionally respectful: it does not track anything, save responses, or send messages automatically.

## What is included

```text
memory_mood_app/
├── index.html
├── styles.css
├── app.js
├── data.js
├── assets/
│   ├── favicon.svg
│   ├── og-card.svg
│   └── moments/
│       ├── moment-01.svg
│       ├── ...
│       └── moment-12.svg
└── README.md
```

## How to personalize it

### 1. Replace the placeholder photos

Put your real photos inside:

```text
assets/moments/
```

For example:

```text
assets/moments/kyoto-dinner.jpg
assets/moments/tokyo-walk.jpg
assets/moments/hawaii-trip.jpg
```

Then open `data.js` and replace the image paths:

```js
image: "assets/moments/kyoto-dinner.jpg"
```

### 2. Edit the memory titles and captions

In `data.js`, each memory has English and Japanese text:

```js
en: {
  title: "A day that felt easy",
  caption: "One of those small moments..."
},
ja: {
  title: "自然に楽しかった日",
  caption: "完璧じゃなくても..."
}
```

Change these to match your real memories.

### 3. Edit the phone number

At the top of `data.js`:

```js
const CONTACT_PHONE = "+8107090503851";
```

Change it if needed.

### 4. Edit the action options

The app includes actions such as:

- Call me
- Reserve dinner or lunch
- Ask for help with work
- Ask for a surprise gift
- Plan a small trip
- Practice English
- Take a quiet walk
- Coffee or tea
- Ask for space

You can edit, remove, or add actions in the `ACTIONS` array inside `data.js`.

## How to run locally

You do not need to install anything.

Open this file in your browser:

```text
index.html
```

For best results, use a small local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## How to upload to GitHub

1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Go to **Settings**.
4. Go to **Pages**.
5. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save.
7. GitHub will give you a public URL after publishing.

## Notes

- This is a static app. It has no backend.
- Nothing is collected or stored.
- The SMS button may behave differently depending on the phone/browser.
- The call button opens the phone dialer only on devices that support telephone links.
