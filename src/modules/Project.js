export default class Project {
  constructor(id, name) {
    this.id = id
    this.name = name
    this.tasks = []
  }

  setName(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  getId() {
    return this.id
  }

  setTasks(tasks) {
    this.tasks = tasks
  }

  getTasks() {
    return this.tasks
  }

  getTask(taskId) {
    return this.tasks.find((task) => task.getId() === taskId)
  }

  contains(taskName) {
    return this.tasks.some((task) => task.getName() === taskName)
  }

  addTask(newTask) {
    this.tasks.push(newTask)
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId)
  }
}
