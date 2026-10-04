```javascript
// ================================
// მობილური მენიუ
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// ================================
// მენიუს დახურვა ლინკზე დაჭერისას
// ================================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// ================================
// საკონტაქტო ფორმა
// ================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (name === "") {
        formMessage.textContent = "გთხოვ, შეიყვანე შენი სახელი.";
        return;
    }

    formMessage.textContent =
        `მადლობა, ${name}! შენი შეტყობინება წარმატებით გაიგზავნა.`;

    contactForm.reset();

});


// ================================
// ბარათების გამოჩენის ეფექტი
// ================================

const cards = document.querySelectorAll(
    ".problem-card, .feature-box"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});
```