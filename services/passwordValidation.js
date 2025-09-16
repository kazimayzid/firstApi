function passwordValidation (password) {
    const pattern = /^.{8,}$/;
    return pattern.test(password)
}
module.exports = passwordValidation