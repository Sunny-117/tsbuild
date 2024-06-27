/* eslint-disable no-console */
export class HappyPath {
  constructor(name) {
    this.name = name
  }

  getAge() {
    return this.age
  }
}

const ins = new HappyPath('John', 20)
console.log(ins.getName())
console.log(ins.getAge())
