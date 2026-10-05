async function loadResources() {
  const list = document.querySelector("#resource-list");
  try {
    const response = await fetch("content.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Konten tidak ditemukan");
    const payload = await response.json();
    if (payload.error) throw new Error(payload.error);
    const page = payload.page || payload;
    document.title = `${page.title} | Wartam Digital`;
    document.querySelector("#page-category").textContent = page.category;
    document.querySelector("#page-title").textContent = page.title;
    document.querySelector("#page-intro").textContent = page.description;
    list.innerHTML = page.resources.map((item) => `<a class="resource-card" href="${item.url}" target="_blank" rel="noopener noreferrer"><div><span class="resource-type">${item.type}</span><h2>${item.title}</h2><p>${item.description}</p></div><span class="resource-open">Buka materi ↗</span></a>`).join("");
  } catch (error) { list.innerHTML = `<p class="empty">Konten materi belum tersedia.</p>`; }
}
loadResources();
