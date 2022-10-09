import { generateUUID } from "../util/numberUtil"

const usersKey = "users"
const authKey = "auth"
/**
 *
 * @description Retrieve users from local storage
 *
 */
export const getUsersFromDb = () => {
  const users = localStorage.getItem(usersKey)
  if (users) return JSON.parse(users)
  return []
}

/**
 *
 * @description Save Item to localStorage
 *
 */
export const addUserToDb = (user) => {
  const users = getUsersFromDb()
  users.push({ ...user, id: generateUUID() })
  localStorage.setItem(usersKey, JSON.stringify(users))
}

/**
 *
 * @description Authenticate user based on login cred
 *
 */
export const auth = (user) => {
  const users = getUsersFromDb()
  const isValidCred = users.find(
    (item) =>
      (item.email === user.identifier || item.username === user.identifier) &&
      item.password === user.password
  )

  return isValidCred
}

/**
 *
 * @description Save token to localstorage
 *
 */
export const saveAuthToken = (user) => {
  localStorage.setItem(authKey, JSON.stringify(user))
}

/**
 *
 * @description retrieve token from localstorage
 *
 */
export const getAuthUser = () => {
  const user = localStorage.getItem(authKey)
  return user ? JSON.parse(user) : null
}

/**
 *
 * @description handle logout
 *
 */
export const logout = () => {
  localStorage.removeItem(authKey)
}

/**
 * @description Handle Edit
 */
export const editUser = (row) => {
  const users = getUsersFromDb()
  const index = users.findIndex((user) => user.id === row.id)
  users[index] = row
  localStorage.setItem(usersKey, JSON.stringify(users))
}

/**
 * @description handle delete
 */
export const deleteUser = (row) => {
  const users = getUsersFromDb()?.filter((item) => item.id !== row.id)
  localStorage.setItem(usersKey, JSON.stringify(users))
}
