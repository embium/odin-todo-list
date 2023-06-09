export default class TodoList {
  constructor() {
    this.projects = []
  }

  setProjects(projects) {
    this.projects = projects
  }

  getProjects() {
    return this.projects
  }

  getProject(projectId) {
    return this.projects.find((project) => project.getId() === projectId)
  }

  contains(projectName) {
    return this.projects.some((project) => project.getName() === projectName)
  }

  addProject(newProject) {
    this.projects.push(newProject)
  }

  deleteProject(projectId) {
    const projectToDelete = this.projects.find(
      (project) => project.getId() === projectId
    )
    this.projects.splice(this.projects.indexOf(projectToDelete), 1)
  }
}
