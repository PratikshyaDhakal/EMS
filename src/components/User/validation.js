import * as yup from "yup"

const userCreationSchema = yup.object({
  username: yup.string().required("User is required"),
  password: yup
    .string()
    .required("Password is required!")
    .min(8, "Password is too short")
    .test("isValidPass", "Password must be 8 char (One UpperCase & One Symbol)", (value) => {
      const hasUpperCase = /[A-Z]/.test(value)
      const hasSymbol = /["!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/.test(value)
      let validConditions = 0
      const numberOfMustBeValidConditions = 2
      const conditions = [hasUpperCase, hasSymbol]
      conditions.forEach((condition) => (condition ? validConditions++ : null))
      if (validConditions >= numberOfMustBeValidConditions) {
        return true
      }
      return false
    }),
  email: yup.string().email().required("Email is required"),
  name: yup.string().required(),
  role: yup.string().oneOf(["Manager", "Admin", "Normal_User"]),
})

export default {
  userCreationSchema,
}
