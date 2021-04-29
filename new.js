const formElement = document.querySelector(".form");

function parseJSONFromLocalStorage(key) {
  const json = localStorage.getItem(key);
  const data = JSON.parse(json);
  return data;
}

function appendToArray(item, array) {
  return [...array, item];
}

function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

formElement.onsubmit = function (event) {
  // Prevent the default form submit behavior (sending data to a server an reloading page)
  event.preventDefault();

  const textInputElement = document.querySelector(".form__input");
  const checkedDateInput = document.querySelector(
    ".radio-group__input:checked"
  );

  if (!textInputElement.value) {
    alert("Please enter task!");
    return;
  }

  if (!checkedDateInput) {
    alert("Please enter date!");
    return;
  }

  const task = {
    name: textInputElement.value,
    date: checkedDateInput.value,
  };

  const taskList = parseJSONFromLocalStorage("taskList");
  const newTaskList = appendToArray(task, taskList);
  stringifyJSONToLocalStorage("taskList", newTaskList);
};

// const taskJSON = JSON.stringify(task);
// localStorage.setItem("task", taskJSON);
// localStorage.getItem("taskList");
// JSON.parse(lo)
//   const taskList = JSON.parse(task);
// Get existing taskList (localStorage.getItem, JSON.parse)
// const taskList - ???;

// const taskArray = JSON.parse(localStorage.getItem("taskList"));
// if (!taskArray) {
//   localStorage.setItem("taskList");
//   const taskArray = JSON.parse(localStorage.getItem("taskList"));
// }
// if (!JSON.parse(localStorage.getItem("taskList"))) {
//   const taskArray = [""];
// }

// Append new task to exsiting taskList
// taskArray.push(task);

// Save updated taskList (localStorage.setItem, JSON.stringify)
//   localStorage.setItem("taskList", JSON.stringify(taskArray));
// };
// const formElement = document.querySelector(".form");

// formElement.onsubmit = function (event) {
//   // Prevent the default form submit behaivor (sending data to a server an reloading page)
//   event.preventDefault();

//   const textInputElement = document.querySelector(".form__input");
//   const checkedDateInput = document.querySelector(
//     ".radio-group__input:checked"
//   );

//   if (!textInputElement.value) {
//     alert("Text Input is empty!");
//     return;
//   }

//   if (!checkedDateInput) {
//     alert("Radio Button not checked!");
//     return;
//   }

//   const task = {
//     name: textInputElement.value,
//     date: checkedDateInput.value,
//   };

// };
