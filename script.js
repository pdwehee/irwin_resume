// Background image slideshow (optional if still used)
const backgroundImages = [
  "img/bg1.jpg",
  "img/bg2.jpg",
  "img/bg3.jpg"
];
let currentIndex = 0;
const heroSection = document.querySelector(".hero-section");

function changeBackground() {
  if (heroSection) {
    heroSection.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % backgroundImages.length;
  }
}
setInterval(changeBackground, 5000); // Change every 5 seconds

// Mobile nav toggle
const toggleButton = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar-collapse");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    navbarMenu.classList.toggle("show");
  });
}

// Scroll to top button
const scrollBtn = document.querySelector("#scrollToTopBtn");

window.onscroll = () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark/Light mode toggle
const modeToggle = document.querySelector("#modeToggle");

if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      modeToggle.innerHTML = '<i class="bi bi-brightness-high"></i>';
    } else {
      localStorage.setItem("theme", "light");
      modeToggle.innerHTML = '<i class="bi bi-moon"></i>';
    }
  });

  // Load saved theme
  window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      modeToggle.innerHTML = '<i class="bi bi-brightness-high"></i>';
    }
  });
}

// PDF Print Button
const printBtn = document.querySelector("#printPdfBtn");
if (printBtn) {
  printBtn.addEventListener("click", () => {
    const embed = document.querySelector(".pdf-container embed");
    if (embed) {
      const win = window.open(embed.src, "_blank");
      win.addEventListener("load", () => {
        win.print();
      });
    }
  });
}

// PDF Download Button
const downloadBtn = document.querySelector("#downloadPdfBtn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    const embed = document.querySelector(".pdf-container embed");
    if (embed) {
      const link = document.createElement("a");
      link.href = embed.src;
      link.download = "resume.pdf";
      link.target = "_blank";
      link.click();
    }
  });
}


