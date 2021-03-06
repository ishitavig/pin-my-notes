// Import express
const express = require('express')

// Import users-controller
const usersRoutes = require('./../controllers/users-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all users
// In server.js, users route is specified as '/users'
// this means that '/all' translates to '/users/all'
router.get('/all', usersRoutes.usersAll)

// Add route for GET request to retrieve one user
// In server.js, users route is specified as '/users'
// this means that '/:userId' translates to '/users/:userId'
router.post('/login', usersRoutes.login)

// Add route for POST request to create new user
// In server.js, users route is specified as '/users'
// this means that '/create' translates to '/users/create'
router.post('/create', usersRoutes.usersCreate)

// Add route for PUT request to delete specific user
// In server.js, users route is specified as '/users'
// this means that '/delete' translates to '/users/delete'
router.put('/delete', usersRoutes.usersDelete)

// Add route for PUT request to reset users list
// In server.js, users route is specified as '/users'
// this means that '/reset' translates to '/users/reset'
router.put('/reset', usersRoutes.usersReset)

// Export router
module.exports = router