export function generateRandomId(): number {
  return parseInt(Math.random().toString().slice(2, 9))
}
