function createTaskElement(taskName) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.type = "checkbox";
  input.className = "checkbox-group__input";

  span.className = "checkbox-group__task";
  span.innerText = taskName;

  label.append(input, span);
  return label;
}

const heatTeeElement = createTaskElement("Kaffee kaufen");
const drinkTeeElement = createTaskElement("Kaffee trinken");

const dashboardGroupElement = document.querySelector(".checkbox-group");

dashboardGroupElement.append(heatTeeElement, drinkTeeElement);
