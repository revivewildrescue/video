const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "epllive19";

fetch(`./pages/${encodeURIComponent(id)}.html`)
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return res.text();
  })
  .then(html => {
    document.open();
    document.write(html);
    document.close();
  })
  .catch(err => {
    console.error("Loader error:", err);
    document.body.textContent = "Page could not be loaded.";
  });
