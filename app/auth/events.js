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

  api.signUp(formData).then(ui.signUpSuccess).catch(ui.signUpFailure)
}
// sign in

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData).then(ui.signInSuccess).catch(ui.signInFailure)
}
// sign out
const onSignOut = function () {
  api.signOut().then(ui.signOutSuccess).catch(ui.signOutFailure)
}
// Game
let gameStatus = true
let gameCell = ['', '', '', '', '', '', '', '', '']
// start as x
let player = 'X'

// Playing Game
const pickBox = function (event) {
  const xOrO = player
  // gameStatus is true so will switch back and forth
  if (gameStatus) {
    const box = $(event.target)
    // looking at array and seeing if its an empty
    if (gameCell[event.target.id] === '') {
      // replace with x or o
      gameCell[event.target.id] = xOrO
      if (xOrO === 'X') {
        player = 'O'
      } else {
        player = 'X'
      }
      // box.text(xOrO)
      box.addClass(xOrO)
    }
    // call function so that with every click it checks for winner and finishes game.
    if (checkWin(xOrO)) {
      finishGame(xOrO)
    }
  }
}

// checking for winner
const checkWin = function (xOrO) {
  // horizontal
  if (gameCell[0] === xOrO && gameCell[1] === xOrO && gameCell[2] === xOrO) {
    $('#bro-display').text(`${xOrO}, you win!`)
    console.log(`${xOrO} won`)
    return true
  } else if (
    gameCell[3] === xOrO &&
    gameCell[4] === xOrO &&
    gameCell[5] === xOrO
  ) {
    $('#bro-display').text(`${xOrO}, you win!`)
    console.log(`${xOrO} won`)
    return true
  } else if (
    gameCell[6] === xOrO &&
    gameCell[7] === xOrO &&
    gameCell[8] === xOrO
  ) {
    $('#bro-display').text(`${xOrO}, you win!`)
    console.log(`${xOrO} won`)
    return true
    // vertical
  } else if (
    gameCell[0] === xOrO &&
    gameCell[3] === xOrO &&
    gameCell[6] === xOrO
  ) {
    $('#bro-display').text(`${xOrO}, you win!`)
    console.log(`${xOrO} won`)
    return true
  } else if (
    gameCell[1] === xOrO &&
    gameCell[4] === xOrO &&
    gameCell[7] === xOrO
  ) {
    $('#bro-display').text(`${xOrO}, you win!`)
    console.log(`${xOrO} won`)
    return true
  } else if (
    gameCell[2] === xOrO &&
    gameCell[5] === xOrO &&
    gameCell[8] === xOrO
  ) {
    $('#bro-display').text(`${xOrO}, you win!`)
    console.log(`${xOrO} won`)
    return true
    // diagonal
  } else if (
    gameCell[0] === xOrO &&
    gameCell[4] === xOrO &&
    gameCell[8] === xOrO
  ) {
    $('#bro-display').text(`${xOrO}, you win!`)
    console.log(`${xOrO} won`)
    return true
  } else if (
    gameCell[2] === xOrO &&
    gameCell[4] === xOrO &&
    gameCell[6] === xOrO
  ) {
    $('#bro-display').text(`${xOrO}, you win!`)
    console.log(`${xOrO} won`)
    return true
    // TIE/CAT
  } else if (
    gameCell[0] !== '' &&
    gameCell[1] !== '' &&
    gameCell[2] !== '' &&
    gameCell[3] !== '' &&
    gameCell[4] !== '' &&
    gameCell[5] !== '' &&
    gameCell[6] !== '' &&
    gameCell[7] !== '' &&
    gameCell[8] !== '') {
    $('#bro-display').text('IT\'S A CAT!')
    console.log("It's a Tie!")
  }
  return false
}

// finish game
const finishGame = function () {
  // $('#bro-display').text(`${xOrO}, you win!`)
  // make game stop by changing value to false so it isn't able to continue.
  gameStatus = false
}

// New game
const onNewGame = function (event) {
  event.preventDefault()
  // reset game board
  gameStatus = true
  gameCell = ['', '', '', '', '', '', '', '', '']

  api.newGame().then(ui.newGameSuccess).catch(ui.newGameFailure)
}

// DON'T FORGET TO EXPORT
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  pickBox,
  checkWin
}
