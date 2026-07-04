const WHATSAPP_NUMBER = "5926575944";

function cleanValue(value) {
  return value.trim() || "____";
}

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.getElementById("quoteForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const message = [
    "Good day, I need ready-mix concrete.",
    `Name: ${cleanValue(formData.get("name") || "")}`,
    `Phone: ${cleanValue(formData.get("phone") || "")}`,
    `PSI: ${cleanValue(formData.get("psi") || "")}`,
    `Location: ${cleanValue(formData.get("location") || "")}`,
    `Quantity: ${cleanValue(formData.get("quantity") || "")}`,
    `Notes: ${cleanValue(formData.get("notes") || "")}`,
  ].join("\n");

  openWhatsApp(message);
});
