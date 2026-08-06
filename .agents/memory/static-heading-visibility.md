---
name: Static heading visibility
description: Rendering rule for visible content in the salon's static Next.js export.
---

Content that must be immediately visible in the static export, such as section headings, should render without an initial client-only hidden state. Decorative motion can be added after the content is visible.

**Why:** A Framer Motion wrapper beginning at `opacity: 0` can leave a heading invisible when hydration or animation startup is delayed, even though sibling content renders.

**How to apply:** Keep essential headings and labels in normal DOM containers; reserve hidden initial animation states for non-essential decoration or elements with a safe visible fallback.