const backdrop = document.querySelector(".backdrop");
const toggleButton = document.querySelector(".toggleButton");
const mobileNav = document.querySelector(".mobile-nav");

toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function () {
    backdrop.classList.add("open");
  }, 10);
});

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
});

const closeBackdrop = () => {
  if (closeBackdrop) {
    backdrop.classList.remove("open");
  }
  setTimeout(function () {
    backdrop.style.display = "none";
  }, 200);
};

if (backdrop) {
  backdrop.addEventListener("click", closeBackdrop);
}

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
    console.log(link);
  }
});

window.addEventListener("load", () => {
  const map = L.map("map").setView([47.151726, 27.587914], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([47.151726, 27.587914]).addTo(map);

  const onSuccess = (location) => {
    map.setView([location.coords.latitude, location.coords.longitude], 13);
    const marker = L.marker([
      location.coords.latitude,
      location.coords.longitude,
    ]).addTo(map);
  };
});
