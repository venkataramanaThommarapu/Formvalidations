export const emailValidator = (email) => {
  if (!email) {
    return "Email is required"
  } else if (
    !new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)
  ) {
    return "Incorrect email format"
  }
  return ""
}

export const passwordValidator = (password) => {
  if (!password) {
    return "Password is required"
  } else if (password.length < 8) {
    return "Password must have a minimum 8 characters"
  } else if (
    !new RegExp(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    ).test(password)
  ) {
    return "Password should consit of one uppercase, one lowercase, numbers and special characters format"
  }

  return ""
}
