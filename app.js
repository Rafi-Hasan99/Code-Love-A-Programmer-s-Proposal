const wrapper = document.querySelector(".wrapper");
const flyingElementsContainer = document.getElementById("flying-elements-container");

wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("open");
  if (wrapper.classList.contains("open")) {
    createFlyingElements();
  }
});

function createFlyingElements() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const element = document.createElement("div");
      element.classList.add("flying-element");
      
      const randomElement = Math.random();
      if (randomElement < 0.33) {
        element.classList.add("flying-heart");
      } else if (randomElement < 0.66) {
        element.classList.add("flying-flower");
        for (let j = 0; j < 4; j++) {
          const petal = document.createElement("div");
          petal.classList.add("petal");
          element.appendChild(petal);
        }
      } else {
        element.classList.add("flying-bird");
        const leftWing = document.createElement("div");
        leftWing.classList.add("wing", "left");
        const rightWing = document.createElement("div");
        rightWing.classList.add("wing", "right");
        element.appendChild(leftWing);
        element.appendChild(rightWing);
      }

      const startX = window.innerWidth / 2;
      const startY = window.innerHeight;
      const endX = Math.random() * window.innerWidth;
      const endY = Math.random() * -window.innerHeight;

      element.style.left = `${startX}px`;
      element.style.top = `${startY}px`;
      element.style.setProperty('--endX', `${endX - startX}px`);
      element.style.setProperty('--endY', `${endY - startY}px`);

      flyingElementsContainer.appendChild(element);

      setTimeout(() => {
        element.remove();
      }, 4000);
    }, i * 100);
  }
}