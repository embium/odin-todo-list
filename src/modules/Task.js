export default class Task {
  constructor(id, name) {
    this.id = id
    this.name = name
    this.complete
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

  setComplete(complete) {
    this.complete = complete
  }
}
