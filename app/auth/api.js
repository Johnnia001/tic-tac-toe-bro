'use strict'
// DON'T FORGET TO EXPORT
// make config
const config = require('../config')
// make store const
const store = require('../store')
// sign up
const signUp = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: formData
  })
}
// sign in
const signIn = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data: formData
  })
}
// sign out
const signOut = function () {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',

    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
// DON'T FORGET TO EXPORT
// exports
module.exports = {
  signUp,
  signIn,
  signOut
}
