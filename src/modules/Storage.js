import Project from './Project'
import Task from './Task'
import TodoList from './TodoList'

export default class Storage {
  static saveTodoList(data) {
    localStorage.setItem('todoList', JSON.stringify(data))
  }

  static setSelectedListId(id) {
    localStorage.setItem('todoList.selectedId', id);
  }

  static getSelectedListId() {
    return localStorage.getItem('todoList.selectedId');
  }

  static getTodoList() {
    const todoList = Object.assign(
      new TodoList(),
      JSON.parse(localStorage.getItem('todoList'))
    )

    todoList.setProjects(
      todoList
        .getProjects()
        .map((project) => Object.assign(new Project(), project))
    )

    todoList
      .getProjects()
      .forEach((project) =>
        project.setTasks(
          project.getTasks().map((task) => Object.assign(new Task(), task))
        )
      )
    return todoList
  }

  static addProject(project) {
    const todoList = Storage.getTodoList()
    todoList.addProject(project)
    Storage.saveTodoList(todoList)
    return project;
  }

  static deleteProject(projectId) {
    const todoList = Storage.getTodoList()
    todoList.deleteProject(projectId)
    Storage.saveTodoList(todoList)
  }

  static addTask(projectId, task) {
    const todoList = Storage.getTodoList()
    todoList.getProject(projectId).addTask(task)
    Storage.saveTodoList(todoList)
    return task;
  }

  static deleteTask(projectId, taskId) {
    const todoList = Storage.getTodoList()
    todoList.getProject(projectId).deleteTask(taskId)
    Storage.saveTodoList(todoList)
  }

  static setTaskComplete(projectId, taskId, complete) {
    const todoList = Storage.getTodoList()
    todoList.getProject(projectId).getTask(taskId).setComplete(complete)
    Storage.saveTodoList(todoList)
  }
}
