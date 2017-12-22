# Basecoat

Basecoat is a small CSS framework built on top of [normalize-scss](https://github.com/JohnAlbin/normalize-scss): "*A modern alternative to CSS resets*". It began as (and still remains) a personal project meant to be used as a base style for desktop applications built using [Electron](https://electron.atom.io/). It is not limited to this particular use case, though.

### Instructions for building
 - Clone this repository.
 - Install dependencies with `npm install`.
 - `gulp sass` will compile the SCSS into CSS.
 - `gulp sass:watch` will watch and compile the SCSS into CSS when changes are discovered.
 - Check out index.html for the kitchen sink.

---

## Inputs

![](http://i.imgur.com/A3VJh0M.gif)

---

## Switches
![](http://i.imgur.com/fULQRLr.gif)

```html
<input type="checkbox" name="toggle" class="sw" id="toggle-1" checked>
```

---

## Tables

![](http://i.imgur.com/rQEmVkZ.png)

```html
<div class="table">
  <div class="tr info">Hey!</div>
  <div class="tr text-smaller"><code>.tr.info</code></div>
  <div class="tr default">Hi.</div>
  <div class="tr text-smaller"><code>.tr.default</code></div>
  <div class="tr success">Nice!</div>
  <div class="tr text-smaller"><code>.tr.success</code></div>
</div>
```

---

With the `hover` class applied to it:

![](http://i.imgur.com/uuni0Vr.gif)

---

## Grid

![](http://i.imgur.com/5zLQ6oA.png)

```html
<div class="grid">
  <div class="col-1-16">1</div>
  <div class="col-2-16">2</div>
  <div class="col-3-16">3</div>
  <div class="col-4-16">4</div>
  <div class="col-5-16">5</div>
  <div class="col-1-16">1</div>
  <div class="col-4-16">4</div>
  <div class="col-4-16">4</div>
  <div class="col-4-16">4</div>
  <div class="col-4-16">4</div>
  <div class="col-8-16">8</div>
  <div class="col-8-16">8</div>
  <div class="col-16-16">16</div>
</div>
```

---

## Buttons

![](http://i.imgur.com/qi8DCEx.gif)

```html
<span class="btn btn-default">Default</span>
<span class="btn btn-primary">Primary</span>
<span class="btn btn-success">Success</span>
<span class="btn btn-warning">Warning</span>
<span class="btn btn-danger">Danger</span>
```
