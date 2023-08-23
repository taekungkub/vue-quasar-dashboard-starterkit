export function validateEmail(email: string) {
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
  return re.test(email)
}

export function validateNumber(tel: string) {
  var RE = /^-{0,1}\d*\.{0,1}\d+$/
  return RE.test(tel)
}

export function validatePhone(tel: string) {
  var numSlice = tel.slice(0, 2)
  switch (numSlice) {
    case "06":
      if (tel.length !== 10) return false
      else return true
      break
    case "08":
      if (tel.length !== 10) return false
      else return true
      break
    case "09":
      if (tel.length !== 10) return false
      else return true
      break
    default:
      return false
      break
  }
}
