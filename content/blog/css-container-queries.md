---
title: "CSS Container Queries: The Future of Truly Responsive Components"
date: "2024-08-10"
slug: "css-container-queries"
excerpt: "Media queries respond to the viewport. Container queries respond to the parent. Here's why that changes everything about how we build responsive UIs."
category: "Frontend"
author: "Ankush Ananth Bhat"
image: "/posts/cssblog.png"
---

## The Problem with Media Queries

For years, **media queries** have been our go-to tool for responsive design. Want a card to stack vertically on mobile? Write a breakpoint. Want a sidebar to collapse? Write another breakpoint.

But there's a fundamental flaw baked into this approach: **media queries only know about the viewport**, not the component's actual context.

Imagine a card component used in two places:
- A full-width hero section
- A cramped 3-column sidebar

At the same viewport width, both cards get the same styles — even though one has 800px of space and the other has 200px. You end up writing hacks, duplicating styles, or leaking layout logic into your component library.

**Container queries solve this at the root.**

---

## What Are Container Queries?

Container queries let a child element respond to the size of its **parent container**, not the browser window.

You define a container on a parent element, and then query its width inside child selectors — just like a media query, but scoped locally.

```css
/* Step 1: Define the container */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

/* Step 2: Query it from inside */
@container card (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
```

That's it. Now your `.card` component is **self-aware** — it adapts to wherever it's placed, with zero knowledge of the viewport.

---

## Container Types

| Value | What It Tracks |
|---|---|
| `inline-size` | Width of the container (most common) |
| `size` | Width **and** height |
| `normal` | Not a query container (default) |

You'll use `inline-size` in 95% of cases. It tracks horizontal space, which is almost always what matters for layout shifts.

---

## A Real-World Example: Product Card

Here's a classic use case — a product card that goes from stacked to side-by-side based on available space:

```html
<div class="card-wrapper">
  <div class="product-card">
    <img src="product.jpg" alt="Product" />
    <div class="product-info">
      <h2>Wireless Headphones</h2>
      <p>Noise-cancelling, 30hr battery life.</p>
      <button>Add to Cart</button>
    </div>
  </div>
</div>
```

```css
.card-wrapper {
  container-type: inline-size;
}

.product-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.product-card img {
  width: 100%;
  border-radius: 8px;
}

/* When the container is wide enough, go side-by-side */
@container (min-width: 480px) {
  .product-card {
    flex-direction: row;
    align-items: center;
  }

  .product-card img {
    width: 200px;
    flex-shrink: 0;
  }
}
```

Drop this card into any layout — a sidebar, a grid, a modal — and it **just works**. No extra classes, no JS, no viewport math.

---

## Container Query Units

Container queries also introduce new **relative length units**:

| Unit | Meaning |
|---|---|
| `cqw` | 1% of the container's width |
| `cqh` | 1% of the container's height |
| `cqi` | 1% of the container's inline size |
| `cqb` | 1% of the container's block size |
| `cqmin` | Smaller of `cqi` or `cqb` |
| `cqmax` | Larger of `cqi` or `cqb` |

```css
.card-title {
  /* Font scales with the card's own width, not the viewport */
  font-size: clamp(1rem, 4cqi, 2rem);
}
```

This is huge for typography in component libraries where `vw`-based fluid type breaks the moment you nest things.

---

## Container Queries vs. Media Queries

| | Media Queries | Container Queries |
|---|---|---|
| Responds to | Viewport size | Parent container size |
| Use case | Page-level layout | Component-level layout |
| Reusability | Low (tied to viewport) | High (context-independent) |
| Works in design systems | Poorly | Excellently |

> **Rule of thumb**: Use media queries for **page layout**. Use container queries for **component layout**.

---

## Browser Support

Container queries are now **baseline supported** across all modern browsers:

- ✅ Chrome 105+
- ✅ Firefox 110+
- ✅ Safari 16+
- ✅ Edge 105+

Global support sits above **90%** as of 2024. For most production projects, you can use them today without a polyfill.

---

## Tips for Getting Started

1. **Start with your most-reused components** — cards, media objects, stat blocks. These benefit most immediately.
2. **Name your containers** — `container-name` makes nested containers predictable and debuggable.
3. **Don't remove media queries** — they still handle page-level shifts. Container queries complement, not replace.
4. **Combine with CSS Grid and `auto-fill`** — let the grid determine width, and let container queries handle the internal layout. A powerful duo.

```css
/* Grid determines available space */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}

/* Card adapts to whatever space it gets */
.product-grid > * {
  container-type: inline-size;
}
```

---

## Wrapping Up

Container queries are one of the most developer-friendly CSS features shipped in years. They push the responsibility of responsiveness **into the component itself**, making your code more modular, your design systems more robust, and your layouts less brittle.

If you're still writing breakpoint hacks for sidebar-vs-main-content layout differences, it's time to make the switch.

---

*Have a component you're struggling to make truly responsive? Drop it in the [email](mailto:ankushbhataab@gmail.com) — happy to show how container queries can clean it up.*
