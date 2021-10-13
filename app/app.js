'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// require our auth event handler functions
const authEvents = require('./auth/events')
// It will call the function when submitted or clicked
$(() => {
  // sign up
  $('#sign-up').on('submit', authEvents.onSignUp)
  // sign in
  $('#sign-in').on('submit', authEvents.onSignIn)
  // sign out
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#sign-out').on('click', authEvents.onSignOut)
  // new game
  $('#new-game').on('click', authEvents.onNewGame)
  // playing game
  $('')
})
