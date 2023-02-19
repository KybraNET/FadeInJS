// file: fadeintext.js

export function fadeInText(element, duration, synchronousity) {
  const text = element.innerText;
  element.innerText = "";
  const textArray = [...text];
  const maxDelay = textArray.length * synchronousity;
  let delay = maxDelay;

  textArray.forEach((letter) => {
    const letterSpan = document.createElement("span");
    letterSpan.innerHTML = letter;
    letterSpan.style.opacity = 0;
    letterSpan.style.transition = `opacity ${duration}s`;
    element.appendChild(letterSpan);
    setTimeout(() => {
      letterSpan.style.opacity = 1;
    }, maxDelay - delay);
    delay -= synchronousity;
  });
}
