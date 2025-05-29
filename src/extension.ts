import * as vscode from "vscode";

function getIndentationLevel(line: string): number {
  return line.match(/^\s*/)?.[0].length ?? 0;
}

function findNextSameIndentLine(
  editor: vscode.TextEditor,
  direction: "forward" | "backward"
): vscode.Position | null {
  const document = editor.document;
  const currentLine = editor.selection.active.line;
  const currentIndent = getIndentationLevel(document.lineAt(currentLine).text);

  const step = direction === "forward" ? 1 : -1;
  for (
    let line = currentLine + step;
    direction === "forward" ? line < document.lineCount : line >= 0;
    line += step
  ) {
    const text = document.lineAt(line).text;
    if (!text.trim()) {
      continue; // skip empty lines
    }

    const indent = getIndentationLevel(text);
    if (indent === currentIndent) {
      return new vscode.Position(
        line,
        document.lineAt(line).firstNonWhitespaceCharacterIndex
      );
    }
  }
  return null;
}

function jumpToBlock(direction: "forward" | "backward") {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  const nextPos = findNextSameIndentLine(editor, direction);
  if (nextPos) {
    editor.selection = new vscode.Selection(nextPos, nextPos);
    editor.revealRange(new vscode.Range(nextPos, nextPos));
  }
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.jumpToNextBlock", () => {
      jumpToBlock("forward");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.jumpToPreviousBlock", () => {
      jumpToBlock("backward");
    })
  );
}

export function deactivate() {}
