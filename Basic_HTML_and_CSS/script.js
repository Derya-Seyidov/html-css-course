// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeLightbox");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

document.querySelectorAll(".thumb-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const fullSrc = btn.getAttribute("data-full");
    openLightbox(fullSrc);
  });
});

closeBtn.addEventListener("click", closeLightbox);

// click outside image to close
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// ESC closes
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});

// Form (basic validation + simulate submit)
const form = document.getElementById("reservationForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "";

  const firstName = form.elements.firstName.value.trim();
  const lastName  = form.elements.lastName.value.trim();
  const email     = form.elements.email.value.trim();
  const termsOk   = form.elements.terms.checked;

  if (!firstName || !lastName || !email || !termsOk) {
    formMsg.textContent = "Please fill required fields and accept Terms.";
    return;
  }

  formMsg.textContent = "Submitted! We will contact you soon.";
  form.reset();
});
