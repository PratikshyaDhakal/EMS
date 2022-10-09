export function randomNumber(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 *
 * @description generate UUID using random string and random number
 *
 */
export const generateUUID = () => {
  return randomNumber(1, 200) + "-" + Math.random().toString(36).substring(2, 7)
}
