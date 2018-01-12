---
path: "/css"
title: "CSS"
tags: ["css"]
---

## Constraints

* 

## Approach

1.  _Less is more:_ the download payload for all styles, assets, and markup should be minised as much as possible.
2.  _Keep it simple:_ all styles should be defined using simple, modern, and understandable <abbr title="Cascading Style Sheets">CSS</abbr> properties, this means no opinionated development workflows such as Sass, Less etc.
3.  _Effecient design is good design:_ whilst we should minimise technical understanding, this should not interfere with reusable well defined code, therefore we will utilise PostCSS, Autoprefixer and CSSNext to automate cross-browser compatibility.
4.  _Legibility is key:_ we use well structured typefaces & semantics HTML tags with WACG 2.0 compliant contrast ratios to emphasis content.
5.  _Easy reading:_ we will use a high contrast color palette (<abbr title="Web Content Accessibility Guidelines 2.0 AAA">WCAG 2.0 AAA</abbr>) and scaling vertical rythym to provide a clear visual heriarchy context.

## Objectives

* *Clarity:* we will measure the clarity of the typographic design through automatic accessibility testing, ensuring culor contrast and DOM tree hierarchy pass WCAG 2.0 AAA guidelines
* *Consistancy:* we will ensure the consistant rendering of the design across browsers, mediums (screens and print), and devices.

## Writing scalable & reusable CSS

### Relationship between HTML and CSS 

#### CSS as presentation



#### Selectors

##### Class selectors

Classname selectors (`.classname`) are preferred due to their low specificity and semantic meaning.

##### Element selectors

Element selectors (`h2`) are used for reseting or applying the global scope CSS properties to HTML elements, primary for typesetting.

##### State selectors

`:hover`

`:focus`  

`:active`

`:disabled`

### Utilising the Cascade

#### Current Color and Color/Background inheritance

## Testing CSS

### Code testing

### Visual Testing