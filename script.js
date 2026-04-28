// 🔥 AOS INIT
AOS.init({
  duration: 1000,
  once: false
});

// 🔥 ELEMENT
const navbar = document.querySelector(".glass-navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const topBtn = document.getElementById("topBtn");
const images = document.querySelectorAll(".galeri-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// 🔥 SCROLL EVENT (ALL IN ONE)
window.addEventListener("scroll", () => {

  // ✅ Navbar berubah saat scroll
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // ✅ Active menu
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  // ✅ Back to top button
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

// 🔝 Klik tombol ke atas
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 🖼️ LIGHTBOX GALERI
images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
// 🔥 LOADER HILANG SETELAH LOAD
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// 🔥 PROGRESS BAR SCROLL
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scrollTop / height) * 100;

  document.getElementById("progress-bar").style.width = scrolled + "%";
});
// 🔥 FORM SIMULASI
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;

  if (nama === "" || email === "" || pesan === "") {
    alert("Harap isi semua field!");
  } else {
    alert("Pesan berhasil dikirim (simulasi)");
    form.reset();
  }
});