const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

// Toggle mobile menu visibility
menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.style.display === "block";
  mobileMenu.style.display = isOpen ? "none" : "block";
  menuIcon.classList.toggle("hidden", !isOpen);
  closeIcon.classList.toggle("hidden", isOpen);
});

// GSAP animations for elements
gsap.from("h1, p, img", {
  scrollTrigger: {
    trigger: "body",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
});

// Sentences for typing effect
const sentences = [
  "Your First Sentence Here",
  "Your Second Sentence Here",
  "Your Third Sentence Here",
];

let sentenceIndex = 0;
let letterIndex = 0;
const typingTextElement = document.getElementById("typing-text");

// Typing function
function type() {
  if (letterIndex < sentences[sentenceIndex].length) {
    typingTextElement.textContent +=
      sentences[sentenceIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, 100); // Adjust typing speed
  } else {
    setTimeout(erase, 2000); // Wait before erasing
  }
}

// Erasing function
function erase() {
  if (letterIndex > 0) {
    typingTextElement.textContent = sentences[sentenceIndex].substring(
      0,
      letterIndex - 1
    );
    letterIndex--;
    setTimeout(erase, 50); // Adjust erasing speed
  } else {
    sentenceIndex = (sentenceIndex + 1) % sentences.length; // Move to next sentence
    setTimeout(type, 500); // Wait before typing next sentence
  }
}

// Start typing the first sentence
type();
