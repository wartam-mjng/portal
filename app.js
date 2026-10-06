const state = { apps: [], category: "Semua", query: "" };

const grid = document.querySelector("#app-grid");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search-input");

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[character]));
}

function renderCards() {
  const query = state.query.toLowerCase().trim();
  const visibleApps = state.apps.filter((app) => {
    const matchesCategory = state.category === "Semua" || app.category === state.category;
    const searchable = `${app.name} ${app.description} ${app.category}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });

  grid.innerHTML = visibleApps.map((app, index) => `
    <a class="app-card" href="${escapeHtml(app.url)}" target="_blank" rel="noopener noreferrer" aria-label="Buka ${escapeHtml(app.name)}" style="--delay: ${index * 45}ms">
      <div class="card-top"><span class="app-icon ${escapeHtml(app.color)}">${escapeHtml(app.icon)}</span><span class="card-category">${escapeHtml(app.category)}</span></div>
      <div class="card-body"><h3>${escapeHtml(app.name)}</h3><p>${escapeHtml(app.description)}</p></div>
      <div class="card-bottom"><span class="card-link">Buka <span aria-hidden="true">↗</span></span></div>
    </a>`).join("");
  emptyState.hidden = visibleApps.length !== 0;
}

function updateCounts() {
  document.querySelectorAll("[data-count]").forEach((counter) => {
    const category = counter.dataset.count;
    counter.textContent = category === "Semua" ? state.apps.length : state.apps.filter((app) => app.category === category).length;
  });
}

function setCategory(category) {
  state.category = category;
  document.querySelectorAll(".category-tab").forEach((tab) => {
    const active = tab.dataset.category === category;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active);
  });
  renderCards();
}

async function loadApps() {
  try {
    const response = await fetch("apps.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Katalog tidak dapat dimuat");
    const payload = await response.json();
    if (payload.error) throw new Error(payload.error);
    state.apps = Array.isArray(payload) ? payload : payload.apps;
    if (!Array.isArray(state.apps)) throw new Error("Format katalog tidak valid");
    updateCounts();
    renderCards();
  } catch (error) {
    grid.innerHTML = `<div class="load-error"><strong>Katalog belum tersedia.</strong><span>Pastikan portal dibuka melalui server lokal atau hosting statis.</span></div>`;
  }
}

document.querySelectorAll(".category-tab").forEach((tab) => tab.addEventListener("click", () => setCategory(tab.dataset.category)));
searchInput.addEventListener("input", (event) => { state.query = event.target.value; renderCards(); });
document.addEventListener("keydown", (event) => { if (event.key === "/" && document.activeElement !== searchInput) { event.preventDefault(); searchInput.focus(); } });

const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("wartam-theme");
if (savedTheme === "light") document.body.classList.add("light-theme");
themeToggle.addEventListener("click", () => {
  const light = document.body.classList.toggle("light-theme");
  localStorage.setItem("wartam-theme", light ? "light" : "dark");
  themeToggle.setAttribute("aria-label", light ? "Aktifkan tema gelap" : "Aktifkan tema terang");
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
loadApps();
