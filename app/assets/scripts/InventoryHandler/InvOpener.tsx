export function InventoryOpening() {
  const inventory = document.getElementById("inventory");

  if (inventory) {
    inventory.classList.toggle("hidden");
    inventory.classList.toggle("flex");
  }
}

export default InventoryOpening;
