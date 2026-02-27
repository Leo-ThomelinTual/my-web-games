type ActionName = "chop" | "coupé" | "récolter" | "mine" | "dig" | "harvest";

// Récupère le store partagé
const { ressources, addRessource } = useRessources();

const allowedActions: Record<RessourceName, ActionName[]> = {
  wood: ["chop", "coupé"],
  stone: ["mine"],
  dirt: ["dig"],
  berry: ["harvest", "récolter"],
};

const actions: Record<ActionName, (resource: ResourceName) => void> = {
  chop,
  mine,
  dig,
  harvest,
};

export function setupCommandInput() {
  const input = document.getElementById("input") as HTMLInputElement | null;
  const button = document.getElementById("button") as HTMLButtonElement | null;

  if (!input || !button) return;

  button.addEventListener("click", () => handleInput(input));
  input.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Entrer") {
      handleInput(input);
    }
  });
}

function handleInput(input: HTMLInputElement) {
  const raw = input.value.trim().toLowerCase();

  if (!raw) {
    outputText("Pas de commande", 0, 0, "Dig");
    return;
  }

  const parts = raw.split(" ");
  if (parts.length < 2) {
    outputText(
      "Commande incomplète. Exemple : cut wood, mine rock.",
      0,
      0,
      "dig",
    );
    return;
  }

  const actionRaw = parts[0];
  const resourceRaw = parts[1];

  if (!isValidAction(actionRaw) || !isValidResource(resourceRaw)) {
    outputText(
      "Commande inconnue. Exemple : cut wood, mine rock.",
      0,
      0,
      "dig",
    );
    return;
  }

  // Après les checks on "force" le typage - sûr grâce aux guards
  const action = actionRaw as ActionName;
  const resource = resourceRaw as ResourceName;

  if (!allowedAction[resource].includes(action)) {
    outputText(`Vous ne pouvez pas ${action} ${resource}.`, 0, 0, "dig");
    return;
  }

  actions[action](resource);
  input.value = "";
  input.focus();
}

function chop(resource: ResourceName) {
  addRessource(ressources, 1);
  updateUI(resource);
  outputText(`Vous avez coupé du ${resource}`, 20, 0, "Hache", 3000);
}

function mine(resource: ResourceName) {
  addRessource(resource, 1);
  updateUI(resource);
  outputText(`Vous avez miné du ${resource}`, 0, 5, "Mine", 3000);
}

function dig(resource: ResourceName) {
  addRessource(resource, 1);
  updateUI(resource);
  outputText(`Vous avez trouvé ${resource}`, 20, 0, "Dig", 3000);
}

function harvest(resource: ResourceName) {
  addRessource(resource, 1);
  updateUI(resource);
  outputText(`Vous avez récolté ${resource}`, 20, 0, "harvest", 3000);
}

function updateUI(resource: ResourceName) {
  const els = document.querySelectorAll<HTMLElement>(
    `[data-resource="${resource}"]`,
  );
  const val = resources.value[resource]; // safe: resources is typed with ResourceName keys
  els.forEach((el) => (el.textContent = `${val}`));
}

// Type guards (garde-les en sync avec initialResources)
function isValidAction(value: string): value is ActionName {
  return ["chop", "mine", "dig", "harvest", "coupé", "récolter"].includes(
    value,
  );
}

function isValidResource(value: string): value is ResourceName {
  return ["wood", "stone", "dirt", "berry"].includes(value);
}
