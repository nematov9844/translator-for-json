# 🚀 JSON Translator CLI

Translate **only JSON values (not keys)** safely and automatically.

Perfect for localization files like:

```json
{
  "Save": "Save",
  "Cancel": "Cancel"
}
```

---

## ✨ Features

* ✅ Translate **only values**, keys remain unchanged
* 🧠 **Only-missing mode** (translates only if key === value)
* ⚡ `--force` mode (translate all values)
* 🔒 **Placeholder protection**

  * `%1`
  * `{count}`
  * `:name`
* 🔁 Works with:

  * Nested objects
  * Arrays
* 🚀 Built-in **cache** (faster translations)
* 💻 CLI ready (global command)

---

## 📦 Installation

### 1. Clone repo

```bash
git clone https://github.com/YOUR_USERNAME/json-translator.git
cd json-translator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build

```bash
npm run build
```

### 4. Link globally

```bash
sudo npm link
```

---

## ⚙️ Requirements

This project uses `translate-shell`.

Install it:

```bash
sudo pacman -S translate-shell
```

Test:

```bash
trans :uz "Hello"
```

---

## 🚀 Usage

### Dev mode

```bash
npm run dev -- input.json output.json --to uz --force
```

### Build mode

```bash
node dist/index.js input.json output.json --to uz --force
```

### Global command

```bash
jtr input.json output.json --to uz --force
```

---

## 🧪 Examples

### Input

```json
{
  "Save": "Save",
  "Cancel": "Cancel"
}
```

### Output

```json
{
  "Save": "Saqlash",
  "Cancel": "Bekor qilish"
}
```

---

## 🧠 Modes

### Default (only-missing)

```bash
jtr input.json output.json
```

Only translates when:

```json
"Save": "Save"
```

---

### Force mode

```bash
jtr input.json output.json --force
```

Translates all values:

```json
"welcome": "Hello, %1"
```

➡️

```json
"welcome": "Salom, %1"
```

---

## 🔒 Placeholder Protection

Supported patterns:

* `%1`
* `{count}`
* `:name`

Example:

```json
{
  "msg": "Hello, %1",
  "count": "You have {count} messages"
}
```

Output:

```json
{
  "msg": "Salom, %1",
  "count": "Sizda {count} ta xabar bor"
}
```

---

## 📁 Project Structure

```
src/
  index.ts
  translator/
    walk.ts
    translate.ts
    placeholders.ts
```

---

## 🛠 Tech Stack

* Node.js
* TypeScript
* Commander
* translate-shell
* execa

---

## 🔥 Roadmap

* [ ] Progress bar
* [ ] Batch translation (faster)
* [ ] Backup & overwrite flags
* [ ] Translation report
* [ ] Config file support

---

## 👤 Author

NR_Stylle

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
