/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Storage */ \"./src/modules/Storage.js\");\n\n\nconst listsContainer = document.querySelector(\"[data-lists]\");\nconst newListForm = document.querySelector(\"[data-new-list-form]\");\nconst newListInput = document.querySelector(\"[data-new-list-input]\");\nconst deleteListButton = document.querySelector(\"[data-delete-list-button]\");\nconst listDisplayContainer = document.querySelector(\n  \"[data-list-display-container]\"\n);\nconst listTitleElement = document.querySelector(\"[data-list-title]\");\nconst listCountElement = document.querySelector(\"[data-list-count]\");\nconst tasksContainer = document.querySelector(\"[data-tasks]\");\nconst taskTemplate = document.getElementById(\"task-template\");\nconst newTaskForm = document.querySelector(\"[data-new-task-form]\");\nconst newTaskInput = document.querySelector(\"[data-new-task-input]\");\nconst clearCompleteTasksButton = document.querySelector(\n  \"[data-clear-complete-tasks-button]\"\n);\n\nlet lists = _modules_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList()[\"projects\"];\nlet selectedListId = _modules_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSelectedListId() ? undefined : 0;\n\nlistsContainer.addEventListener(\"click\", (e) => {\n  if (e.target.tagName.toLowerCase() === \"li\") {\n    selectedListId = e.target.dataset.listId;\n    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setSelectedListId(selectedListId);\n    render();\n  }\n});\n\ntasksContainer.addEventListener(\"click\", (e) => {\n  if (e.target.tagName.toLowerCase() === \"input\") {\n    const selectedList = lists.find((list) => list.id === selectedListId);\n    const selectedTask = selectedList.tasks.find(\n      (task) => task.id === e.target.id\n    );\n    selectedTask.complete = e.target.checked;\n    renderTaskCount(selectedList);\n  }\n});\n\nclearCompleteTasksButton.addEventListener(\"click\", (e) => {\n  const selectedList = lists.find((list) => list.id === selectedListId);\n  const completed = selectedList.tasks.filter((task) => task.complete);\n  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);\n  completed.forEach((task) => {\n    _modules_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(selectedListId, task.id);\n  })\n  render();\n});\n\ndeleteListButton.addEventListener(\"click\", (e) => {\n  lists = lists.filter((list) => list.id !== selectedListId);\n  _modules_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject(selectedListId);\n  selectedListId = null;\n  render();\n});\n\nnewListForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const listName = newListInput.value;\n  if (listName == null || listName === \"\") return;\n  const list = createList(listName);\n  newListInput.value = null;\n  lists.push(list);\n  render();\n});\n\nnewTaskForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const taskName = newTaskInput.value;\n  if (taskName == null || taskName === \"\") return;\n  const task = createTask(selectedListId, taskName);\n  newTaskInput.value = null;\n  const selectedList = lists.find((list) => list.id === selectedListId);\n  selectedList.tasks.push(task);\n  render();\n});\n\nfunction createList(name) {\n  return _modules_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject({ id: Date.now().toString(), name: name, tasks: [] });\n}\n\nfunction createTask(id, name) {\n  return _modules_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(id, { id: Date.now().toString(), name: name, complete: false })\n}\n\nfunction render() {\n  clearElement(listsContainer);\n  renderLists();\n\n  const selectedList = lists.find((list) => list.id === selectedListId);\n  if (selectedListId == null) {\n    listDisplayContainer.style.display = \"none\";\n  } else {\n    listDisplayContainer.style.display = \"\";\n    listTitleElement.innerText = selectedList.name;\n    renderTaskCount(selectedList);\n    clearElement(tasksContainer);\n    renderTasks(selectedList);\n  }\n}\n\nfunction renderTasks(selectedList) {\n  selectedList.tasks.forEach((task) => {\n    const taskElement = document.importNode(taskTemplate.content, true);\n    const checkbox = taskElement.querySelector(\"input\");\n    checkbox.id = task.id;\n    checkbox.checked = task.complete;\n    const label = taskElement.querySelector(\"label\");\n    label.htmlFor = task.id;\n    label.append(task.name);\n    tasksContainer.appendChild(taskElement);\n  });\n}\n\nfunction renderTaskCount(selectedList) {\n  const incompleteTaskCount = selectedList.tasks.filter(\n    (task) => !task.complete\n  ).length;\n  const taskString = incompleteTaskCount === 1 ? \"task\" : \"tasks\";\n  listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;\n}\n\nfunction renderLists() {\n  lists.forEach((list) => {\n    const listElement = document.createElement(\"li\");\n    listElement.dataset.listId = list.id;\n    listElement.classList.add(\"list-name\");\n    listElement.innerText = list.name;\n    if (list.id === selectedListId) {\n      listElement.classList.add(\"active-list\");\n    }\n    listsContainer.appendChild(listElement);\n  });\n}\n\nfunction clearElement(element) {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n}\n\nrender();\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(id, name) {\n    this.id = id\n    this.name = name\n    this.tasks = []\n  }\n\n  setName(name) {\n    this.name = name\n  }\n\n  getName() {\n    return this.name\n  }\n\n  getId() {\n    return this.id\n  }\n\n  setTasks(tasks) {\n    this.tasks = tasks\n  }\n\n  getTasks() {\n    return this.tasks\n  }\n\n  getTask(taskId) {\n    return this.tasks.find((task) => task.getId() === taskId)\n  }\n\n  contains(taskName) {\n    return this.tasks.some((task) => task.getName() === taskName)\n  }\n\n  addTask(newTask) {\n    this.tasks.push(newTask)\n  }\n\n  deleteTask(taskId) {\n    this.tasks = this.tasks.filter((task) => task.id !== taskId)\n  }\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ \"./src/modules/TodoList.js\");\n\n\n\n\nclass Storage {\n  static saveTodoList(data) {\n    localStorage.setItem('todoList', JSON.stringify(data))\n  }\n\n  static setSelectedListId(id) {\n    localStorage.setItem('todoList.selectedId', id);\n  }\n\n  static getSelectedListId() {\n    return localStorage.getItem('todoList.selectedId');\n  }\n\n  static getTodoList() {\n    const todoList = Object.assign(\n      new _TodoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\n      JSON.parse(localStorage.getItem('todoList'))\n    )\n\n    todoList.setProjects(\n      todoList\n        .getProjects()\n        .map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), project))\n    )\n\n    todoList\n      .getProjects()\n      .forEach((project) =>\n        project.setTasks(\n          project.getTasks().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), task))\n        )\n      )\n    return todoList\n  }\n\n  static addProject(project) {\n    const todoList = Storage.getTodoList()\n    todoList.addProject(project)\n    Storage.saveTodoList(todoList)\n    return project;\n  }\n\n  static deleteProject(projectId) {\n    const todoList = Storage.getTodoList()\n    todoList.deleteProject(projectId)\n    Storage.saveTodoList(todoList)\n  }\n\n  static addTask(projectId, task) {\n    const todoList = Storage.getTodoList()\n    todoList.getProject(projectId).addTask(task)\n    Storage.saveTodoList(todoList)\n    return task;\n  }\n\n  static deleteTask(projectId, taskId) {\n    const todoList = Storage.getTodoList()\n    todoList.getProject(projectId).deleteTask(taskId)\n    Storage.saveTodoList(todoList)\n  }\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(id, name) {\n    this.id = id\n    this.name = name\n  }\n\n  setName(name) {\n    this.name = name\n  }\n\n  getName() {\n    return this.name\n  }\n\n  getId() {\n    return this.id\n  }\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\nclass TodoList {\n  constructor() {\n    this.projects = []\n  }\n\n  setProjects(projects) {\n    this.projects = projects\n  }\n\n  getProjects() {\n    return this.projects\n  }\n\n  getProject(projectId) {\n    return this.projects.find((project) => project.getId() === projectId)\n  }\n\n  contains(projectName) {\n    return this.projects.some((project) => project.getName() === projectName)\n  }\n\n  addProject(newProject) {\n    this.projects.push(newProject)\n  }\n\n  deleteProject(projectId) {\n    const projectToDelete = this.projects.find(\n      (project) => project.getId() === projectId\n    )\n    this.projects.splice(this.projects.indexOf(projectToDelete), 1)\n  }\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/modules/TodoList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;