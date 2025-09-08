// 🔘 Toggle About
function toggleAbout() {
  const about = document.getElementById("about-text");
  about.style.display = about.style.display === "none" ? "block" : "none";
}

// 🗂️ Demo App Data (later /app/ folder se fetch karna hai)
const apps = [
  {
    name: "Termux",
    banner: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Termux.svg",
    short: "Terminal emulator with Linux packages.",
    file: "app/termux.html"
  },
  {
    name: "Kali Linux",
    banner: "https://www.kali.org/images/kali-dragon-icon.svg",
    short: "Most powerful hacking distribution.",
    file: "app/kalilinux.html"
  }
];

// 📦 Load App Grid
function loadApps() {
  const grid = document.getElementById("app-grid");
  grid.innerHTML = "";
  apps.forEach(app => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${app.banner}" alt="${app.name}">
      <h3>${app.name}</h3>
      <p>${app.short}</p>
    `;
    card.onclick = () => loadDetail(app.file);
    grid.appendChild(card);
  });
}

// 📄 Load App Detail
async function loadDetail(file) {
  const detail = document.getElementById("app-detail");
  const grid = document.getElementById("app-grid");
  grid.style.display = "none";
  detail.style.display = "block";

  const res = await fetch(file);
  const html = await res.text();
  detail.innerHTML = html;
}

// 🔍 Search
function searchApps() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const grid = document.getElementById("app-grid");
  grid.innerHTML = "";
  apps
    .filter(app => app.name.toLowerCase().includes(query))
    .forEach(app => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${app.banner}" alt="${app.name}">
        <h3>${app.name}</h3>
        <p>${app.short}</p>
      `;
      card.onclick = () => loadDetail(app.file);
      grid.appendChild(card);
    });
}

// Init
loadApps();