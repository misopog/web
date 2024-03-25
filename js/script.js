titleChanger = (text, delay) => {
  if (!text) return;

  delay = delay || 2000;

  let counter = 0;

  setInterval(() => {
    if (counter < text.length) document.title = text[counter++];
    else document.title = text[(counter = 0)];
  }, delay);
};

titleChanger(["misopog", "follow me on twitter", "star my projects"], 2000);


document.addEventListener("DOMContentLoaded", function() {
    const particleContainer = document.getElementById("particle-container");
    const numParticles = 100; 
    const delayMultiplier = 0.05; 

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * 100 + 'vw'; 
        particle.style.bottom = '0'; 
        particle.style.animationDelay = (i * delayMultiplier) + 's'; 
        particleContainer.appendChild(particle);
    }
});
