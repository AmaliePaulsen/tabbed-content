// Henter alle tabs (knapper)
const tabs = document.querySelectorAll(".tab");

// Henter alle indholdspaneler
const panels = document.querySelectorAll(".tab-content");

// Gennemgår alle tabs
tabs.forEach(tab => {

  // Lytter efter klik på en tab
  tab.addEventListener("click", () => {

    // Finder hvilket panel tab'en peger på
    const target = tab.dataset.target;

    // Fjerner aktiv tilstand fra alle tabs
    tabs.forEach(t => t.classList.remove("is-active"));

    // Viser kun det panel, der matcher data-target
    panels.forEach(panel => {
      panel.classList.toggle("is-visible", panel.id === target);
    });

    // Markerer den klikkede tab som aktiv
    tab.classList.add("is-active");
  });
});