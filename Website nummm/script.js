// Ambil elemen
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");

// Semua gambar gallery
const galleryImgs = document.querySelectorAll(".gallery-img");

// Klik gambar -> tampil modal
galleryImgs.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalDesc.textContent = img.getAttribute("data-desc");
  });
});

// Tutup modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Klik di luar gambar -> tutup
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
