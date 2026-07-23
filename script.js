const WHATSAPP_NUMBER = "5926575944";
const PUMP_MINIMUM_YARDS = 14;
const quoteForm = document.getElementById("quoteForm");
const quantityInput = quoteForm.elements.quantity;
const pumpSelect = quoteForm.elements.pump;
const pourDateInput = quoteForm.elements.pourDate;
const pumpMinimumNote = document.getElementById("pump-minimum-note");

function cleanValue(value) {
  return value.trim() || "____";
}

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function getLocalDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function validatePumpMinimum() {
  const quantity = Number(quantityInput.value);
  const isBelowMinimum = pumpSelect.value === "Yes" && quantityInput.value && quantity < PUMP_MINIMUM_YARDS;
  const message = isBelowMinimum
    ? `Pump truck service requires at least ${PUMP_MINIMUM_YARDS} cubic yards.`
    : "";

  quantityInput.setCustomValidity(message);
  pumpMinimumNote.classList.toggle("is-error", Boolean(isBelowMinimum));
  pumpMinimumNote.textContent = isBelowMinimum
    ? `${message} Increase the quantity or choose No or Not sure.`
    : `Pump truck service requires a minimum order of ${PUMP_MINIMUM_YARDS} cubic yards.`;
}

pourDateInput.min = getLocalDateValue(new Date());
quantityInput.addEventListener("input", validatePumpMinimum);
pumpSelect.addEventListener("change", validatePumpMinimum);

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const message = [
    "Good day, I need ready-mix concrete.",
    `PSI: ${cleanValue(formData.get("psi") || "")}`,
    `Delivery area: ${cleanValue(formData.get("deliveryArea") || "")}`,
    `Quantity: ${cleanValue(formData.get("quantity") || "")} cubic yards`,
    `Pump truck needed: ${cleanValue(formData.get("pump") || "")}`,
    `Desired pour date: ${cleanValue(formData.get("pourDate") || "")}`,
    `Project details: ${cleanValue(formData.get("notes") || "")}`,
  ].join("\n");

  openWhatsApp(message);
});
