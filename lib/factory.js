import { A } from './a.js'
import { B } from './b.js'

export const create = (type) => {
  return type === 'A' ? new A() : new B()
}
