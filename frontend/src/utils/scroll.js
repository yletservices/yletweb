// Smoothly scrolls to a section on the home page by its id.
export function scrollToSection(id, behavior = "smooth") {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior, block: "start" });
}
