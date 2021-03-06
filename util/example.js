import { ganttExample, csvExample, blockExample } from "./menu";

export const example = `# anydown

---

## これはなに？

- Markdownで書けるメモ帳
- スケジュール機能が充実している
  - カンバンやガントチャートを埋め込んで編集できる
  - Trelloに上げるほどでもない、ちょっとした予定表なんかを一枚のMarkdownでまとめることができる
- 単なるテキストなので、エクスポートやメール添付がかんたん
- ローカルストレージに自動保存

---

\`\`\`kanban
# TODO
- ダブルクリックで編集できるよ
- Trelloみたいにドラッグ＆ドロップできるよ

# DONE
- タスク１
- タスク２
\`\`\`

列も増減出来る（テキストで見出しを追加するだけ）

\`\`\`kanban
# BACKLOG
- １シートに複数のカンバンを作れる
# TODO
- 他のカンバンにもドラッグ＆ドロップ出来るよ
# DONE
\`\`\`


# ガントチャート機能

直近２週間のガントチャートを表示出来る

${ganttExample}

# スプレッドシート

${csvExample}

# ブロック図エディタ

${blockExample}

# たぶん実装されない機能

- アラーム機能などは実装されない（Googleカレンダーの方が便利）
- カレンダー機能は実装されない（同上）

`;
