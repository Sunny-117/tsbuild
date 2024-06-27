/* eslint-disable no-console */
export class HappyPath {
  private name: string
  private age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public getName(): string {
    return this.name
  }

  public getAge(): number {
    return this.age
  }
}

const ins = new HappyPath('John', 20)
console.log(ins.getName())
console.log(ins.getAge())
