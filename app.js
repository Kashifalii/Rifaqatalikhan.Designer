// ----------------

document.addEventListener("DOMContentLoaded", () => {
  const tabsContainer = document.querySelector(".nav-tabs");
  const leftButton = document.querySelector(".left-btn");
  const rightButton = document.querySelector(".right-btn");

  const scrollAmount = 100; // Adjust scrolling distance as needed

  leftButton.addEventListener("click", () => {
    tabsContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth", // Smooth scrolling
    });
  });

  rightButton.addEventListener("click", () => {
    tabsContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
});

// ---------------

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link"); // Select all nav links
  const navbarCollapse = document.getElementById("navbarSupportedContent"); // Select the collapsible navbar
  const togglerButton = document.querySelector(".navbar-toggler"); // Select the toggler button

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Collapse the navbar by removing the 'show' class
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
        togglerButton.setAttribute("aria-expanded", "false");
      }
    });
  });
});

// emailjs
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("textarea").value,
    };

    // Send email using EmailJS
    emailjs.send("service_8qvwuz5", "template_4zu7w7j", formData).then(
      function (response) {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("textarea").value = "";
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.log("FAILED...", error);
      }
    );
  });

// cursor Animation

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
console.log(cursorOutline);

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

// ====== Navbar Animations =====

function toggleNavbarOnScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10 && window.scrollY < 500) {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
      navbar.style.backdropFilter = "blur(5px)";
    }
  });
}

toggleNavbarOnScroll();

// -=============

const button = document.querySelector(".cvBtn");

button.addEventListener("click", () => {
  const newTab = window.open("./assets/Kashif-Cv.pdf", "_blank");
  newTab.focus();
});

// ------

// Select elements
const navTabs = document.querySelector('.nav-tabs');
const scrollLeftBtn = document.querySelector('.scroll-btn.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-btn.scroll-right');

// Scroll left on button click
scrollLeftBtn.addEventListener('click', () => {
    navTabs.scrollBy({ left: -100, behavior: 'smooth' });
});

// Scroll right on button click
scrollRightBtn.addEventListener('click', () => {
    navTabs.scrollBy({ left: 100, behavior: 'smooth' });
});
