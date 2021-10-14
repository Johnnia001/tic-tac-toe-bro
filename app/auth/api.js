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
  console.log(store.user)
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',

    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// New Game button
const newGame = function (formData) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/games`,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// update game

const updateGame = function (index, value, over) {
  return $.ajax({
    method: 'PATCH',
    url: `${config.apiUrl}/games/${store.game._id}`,
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    },
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
  signOut,
  newGame,
  updateGame
}
