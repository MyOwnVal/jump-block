# Jump Indent

A lightweight VS Code extension that allows you to **jump forward and backward** between lines that share the **same indentation level**. Designed for Python and other indentation-sensitive languages.

---

## ✨ Features

- Jump to the next or previous non-empty line with the same indentation.
- Skips over blank lines automatically.
- Places the cursor at the first non-whitespace character of the target line.
- Ideal for navigating between `try`/`except`, `if`/`elif`, or sibling blocks in Python code.

---

## 🎯 Usage

Once installed, use the following commands:

| Command                | Keybinding        | Description                               |
|------------------------|------------------|-------------------------------------------|
| Jump To Next Block     | `Ctrl+Alt+Down`   | Jump forward to next block with same indent |
| Jump To Previous Block | `Ctrl+Alt+Up`     | Jump backward to previous block with same indent |

You can also find both commands in the **Command Palette** (`Ctrl+Shift+P`).

---

## 🔧 Requirements

- [Node.js](https://nodejs.org/) (for building)
- VS Code 1.50.0 or newer

---

## 🛠 Installation

1. Clone or download this repository.
2. Run the following in the root directory:
   ```bash
   npm install
   npm run compile
   ```
3. Package it with:
   ```bash
   npx vsce package
   ```
4. Open VS Code, go to Extensions → `...` → **Install from VSIX...**
5. Select the generated `.vsix` file.

---

## 🚧 Known Issues

- Currently only checks indentation; does not validate syntax or structure.
- Does not distinguish between language constructs (e.g., `if` vs `try`).

---

## 🗒 Release Notes

### 0.0.1

- Initial release
- Supports jumping between same-indentation lines with basic filtering
- Cross-platform keybindings

---

## 📘 License

MIT

---

## 🙌 Contributions

Pull requests are welcome. If you find a bug or have a feature request, feel free to open an issue.
