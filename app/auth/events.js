'use strict'
// DON'T FORGET TO EXPORT

// put in require constants
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Sign up
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api
    .signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
// sign in

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api
    .signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
// sign out
const onSignOut = function () {
  api.signOut().then(ui.signOutSuccess).catch(ui.signOutFailure)
}

// New game
const onNewGame = function (event) {
  event.preventDefault()
  api.newGame().then(ui.newGameSuccess).catch(ui.newGameFailure)
}

const gameStatus = true
const gameCell = ['', '', '', '', '', '', '', '', '']
// start as x
let player = 'O'
const pickBox = function (event) {
  const xOrO = player
  // gameStatus is false so will switch back and forth
  if (gameStatus) {
    const box = $(event.target)
    // looking at array and seeing if its an empty
    if (gameCell[event.target.id] === '') {
      //
      gameCell[event.target.id] = xOrO
      if (xOrO === 'X') {
        player = '0'
      } else {
        player = 'X'
      }
      box.text(player)
    }
  }
}
// DON'T FORGET TO EXPORT
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  pickBox
}
