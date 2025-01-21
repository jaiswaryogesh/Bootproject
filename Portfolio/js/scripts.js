// Leaflet Map

const map = L.map('map').setView([19.063512180872067, 72.92533233862646], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Scroll Animation using Intersection Observer
const scrollElements = document.querySelectorAll(".scroll-element");

const scrollObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Unobserve after animation
            }
        });
    },
    {
        threshold: 0.2, // Trigger when 20% of the element is visible
    }
);

// Attach observer to elements
scrollElements.forEach((el) => scrollObserver.observe(el));

 // Listen for the form submission event
 document.getElementById("questionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission (no page reload)
    var myModal = new bootstrap.Modal(document.getElementById('thankYouModal')); // Initialize modal
    myModal.show(); // Show the modal
});
const toggleFormBtn = document.getElementById('toggleFormBtn');
const formContainer = document.getElementById('formContainer');
const closeFormBtn = document.getElementById('closeFormBtn');

const modal = document.getElementById("customModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close-btn");

// Open Modal and Disable Background Scroll
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Disable background scroll
});

// Close Modal and Enable Background Scroll
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable background scroll
});

// Close Modal on Outside Click and Enable Background Scroll
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable background scroll
    }
});
