# Assignment 6. jQuery (Selectors, Effects, Animations)

**Student:** Ashkarbekova Parasat
**Group:** SE-2529

## About the project

This is a simple website made for Assignment 6 in Web Technologies.
The goal of the project is to learn jQuery. jQuery is a JavaScript library that makes it easier to:

- select and change HTML elements
- work with events like clicks and typing
- show, hide, fade and slide elements
- make animations

The website has 6 pages. Each part of the assignment is on its own page.
There is a navbar at the top of every page, so you can move between parts.

## Live site

https://parasatashk.github.io/WT_Assign6/

## Technologies

- HTML
- CSS
- JavaScript
- jQuery 3.7.1 (from CDN)
- GitHub Pages (for hosting)

## Project structure

```
WT_Assign6/
├── index.html      Home page and Task 0
├── part1.html      Task 1
├── part2.html      Tasks 2-4
├── part3.html      Tasks 5-7
├── part4.html      Tasks 8-10
├── part5.html      Task 11
├── style.css       Styles for all pages
├── js/             One JavaScript file for each page
└── images/         Pictures for Part 2 and Part 3
```

## Tasks

### Part 1. Getting Started with jQuery

**Task 0. Setup** (Home page)
jQuery is added from a CDN. When the page is loaded, `$(document).ready()` prints "jQuery is ready!" in the console and on the page.

**Task 1. Selectors and CSS** (Part 1 page)
Elements are selected by ID (`#title`), by class (`.info`) and by tag (`span`).
- "Change text" button uses `.text()`
- "Change HTML" button uses `.html()`
- "Change CSS" button uses `.css()` to change color, background, font size and border

### Part 2. jQuery Effects

**Task 2. Visibility Methods**
A paragraph with three buttons: Hide, Show and Toggle. They use `.hide()`, `.show()` and `.toggle()`.

**Task 3. Fade Methods**
An image with three buttons. They use `.fadeIn()`, `.fadeOut()` and `.fadeToggle()`.

**Task 4. Slide Methods**
A panel that opens and closes with `.slideUp()`, `.slideDown()` and `.slideToggle()`.

### Part 3. DOM Manipulation

**Task 5. Add and Remove Elements**
A list with three buttons:
- "Add Item" adds a new item to the end with `.append()`
- "Add Item to Top" adds a new item to the start with `.prepend()`
- "Remove Item" removes the last item with `.remove()`

**Task 6. Modifying Attributes**
- "Change Image" button changes the `src` of the image with `.attr()`
- "Change Link" button changes the `href` of the link with `.attr()`

**Task 7. Form Interaction**
A form with Name and Email fields. When the user types, the text is shown below the form right away. It uses `.val()` to get the value and `.text()` to show it.

### Part 4. Animations

**Task 8. Basic Animation**
The square gets bigger and moves to a new position with `.animate()`.

**Task 9. Sequential Animations**
The square moves step by step: right, then down, then gets smaller, then goes back to the start.

**Task 10. Combined Animation**
One `.animate()` call changes opacity, size and position at the same time.

### Part 5. Mini Project

**Task 11. Accordion Menu**
There are three sections with titles. When you click a title, the section opens with `.slideToggle()`. Other open sections close with `.slideUp()`. The open title changes color.

## How to run

**Option 1:** open the live site link above.

**Option 2:** run it on your computer.
1. Download or clone the repository:
   ```
   git clone https://github.com/ParasatAshk/WT_Assign6.git
   ```
2. Open `index.html` in a browser.
3. You need internet, because jQuery is loaded from a CDN.

To see the "jQuery is ready!" message, open the browser console (F12, then the Console tab).
