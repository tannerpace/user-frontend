import Record from "../base"

export class User extends Record {
  get initials() {
    return `${this.userName?.[0] || ""}`
  }
  constructor(...args) {
    super(...args)
    const [model, props] = args

  }
}
