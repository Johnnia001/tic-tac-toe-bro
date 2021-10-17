'use strict'
// DON'T FORGET TO EXPORT
// store object to share with different files
const store = require('../store')
// const events = require('./events')
// success and failure functions so it can display on site if it messes up or not

// sign up success

const signUpSuccess = function (responseData) {
  // tell the user it was successful
  $('#bro-display').text('Signed up successfully, Bro!')
  $('#bro-display').removeClass()
  $('#bro-display').addClass('text-success')
  // reset all of the forms
  $('form').trigger('reset')
  console.log('responseData is', responseData)
}
// sign up failure

const signUpFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign up failed, Bro...')
  // remove existing classes, then make it red with bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  // print the error
  console.error('error is', error)
}

// sign in success

const signInSuccess = function (responseData) {
  // add the user from response data in store for their token we can get in api
  store.user = responseData.user
  console.log('store is', store)

  $('#bro-display').text('Signed in successfully Bro!')

  // make text green. maybe change later??

  $('#bro-display').removeClass()
  $('#bro-display').addClass('text-success')
  // clear forms
  $('form').trigger('reset')

  // hide before sign in section
  $('#before-sign-in').hide()
  // show after sign in section
  $('#after-sign-in').show()
  $('#new-game-button').show()
  console.log('responseData is', responseData)
}

// sign in fail;ure

const signInFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign in failed :( sowwy Bro')
  // make red
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  // print error
  console.error('error is', error)
}

// sign out success

const signOutSuccess = function (responseData) {
  // tell user
  $('#bro-display').text('Signed Out successfully, Bro!')
  // make text green
  $('#bro-display').removeClass()
  $('#bro-display').addClass('text-success')
  $('form').trigger('reset')
  // show before sign in and hide after sign in
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
  $('#new-game-button').hide()
  $('.game-board').hide()

  console.log('responseData is', responseData)
}
// sign out failure

const signOutFailure = function (error) {
  $('#error-message').text('Signing out failed! >:( ')
  // make text red
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('error is', error)
}
// newGame
const newGameSuccess = function (responseData) {
  store.game = responseData.game
  console.log('store is', store)

  $('#bro-display').text("Let's Start Bro!")

  $('#bro-display').removeClass()
  $('#bro-display').addClass('text-success')
  $('button').trigger('reset')
  $('.game-board').show()
  // remove character images
  $('.box').removeClass('X')
  $('.box').removeClass('O')

  console.log('responseData is', responseData)
  // Save players moves
  store.currentPlayer = 'X'
  store.board = ['', '', '', '', '', '', '', '', '']
}

const newGameFailure = function (error) {
  $('#error-message').text(
    'I guess this is Jumanji now, or this button does\'nt work.'
  )
  // make text red
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  console.error('error is', error)
}

// DON'T FORGET TO EXPORT
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure
}
