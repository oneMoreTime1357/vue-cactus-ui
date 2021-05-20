export const isBool = (val: unknown) => typeof val === 'boolean'
export const isNumber = (val: unknown) => typeof val === 'number'

const hasOwnProperty = Object.prototype.hasOwnProperty

export function hasOwn(obj: object, key: string) {
  return hasOwnProperty.call(obj, key)
}

export function isVNode(node: object) {
  return (
    node !== null &&
    typeof node === 'object' &&
    hasOwn(node, 'componentOptions')
  )
}
