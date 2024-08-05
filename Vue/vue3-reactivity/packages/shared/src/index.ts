export function isObject(value: any) {
  return typeof value == 'object' && value !== null;
}

export function isChanged(oldValue: any, newValue: any) {
  return newValue !== oldValue;
}

export let merge = Object.assign;

export let isArray = Array.isArray;

export function isIntegeKey(key: string) {
  return parseInt(key) + '' == key
}

export function hasOwn(target: any, key: PropertyKey) {
  return Object.prototype.hasOwnProperty.call(target, key)
}