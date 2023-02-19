# FadeInJS
A lightweight JavaScript module for fading in text one letter at a time

## Usage

Import the `fadeInText` function from the `fadeintext.js` module and pass in a DOM element, \
**duration (in seconds)** \
**synchronousity (in milliseconds per letter)** \
as arguments. For example:

```javascript
import { fadeInText } from './fadeintext.js';

const element = document.getElementById('my-element');
fadeInText(element, 1, 50); //htmlElement, duration, synchronousity
```
## Background
Inspired by the FadeIn Sequence from textilate.js
You can achieve the same effect as using four libraries, making it more SEO-friendly.

## Dependencies
Just plain js 





[![License](https://img.shields.io/badge/License-GPL%20v3.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
