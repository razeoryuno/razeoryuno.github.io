---
name: Working Rules
description: Output style, memory location, and doc-update rules set by the user
type: feedback
---

Always update CLAUDE.md when anything about structure, stack, content shape, or conventions changes.
**Why:** Keep the doc current so future sessions have accurate context without reading the whole codebase.
**How to apply:** After any structural or convention change, add/edit the relevant section in CLAUDE.md before closing the task.

Save all persistent memory to `.claude/memory/` inside this repo, not to the global user memory path (`~/.claude/projects/...`).
**Why:** Memory should travel with the repo and be visible in version control.
**How to apply:** Write memory files to `E:\Repository\razeo\razeoryuno.github.io\.claude\memory\` and update MEMORY.md there.

Never output existing/unchanged code. Only show what changed — diffs, new snippets, or a one-line summary.
**Why:** User can see the full file; repeating unchanged code wastes space and adds noise.
**How to apply:** For any edit, output only the changed lines or a short description of the change. Never paste back the whole file.
