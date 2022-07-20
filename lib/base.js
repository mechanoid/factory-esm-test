export class Base {
  hello () {
    console.log('hello world, from:', this.from)
  }

  get from () {
    throw new Error('INTERFACE')
  }
}
