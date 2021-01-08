// Import database
const knex = require('./../db')

// Retrieve all books
exports.notesAll = async (req, res) => {
    console.log('requested')
  // Get all books from database
  knex
    .select('*') // select all records
    .from('notes') // from 'books' table
    .then(userData => {
      // Send books extracted from database in response
      console.log(userData,'data')
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving books: ${err}` })
    })
}

// Create new book
exports.notesCreate = async (req, res) => {
  // Add new book to database
  console.log(req.body,'body')
  knex('notes')
    .insert({ // insert new record, a book
      'heading': req.body.heading,
      'body': req.body.body,
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Note \'Heading: ${req.body.heading}\' , Body: ${req.body.body}.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.heading} book: ${err}` })
    })
}

// Remove specific book
exports.notesDelete = async (req, res) => {
  // Find specific book in the database and remove it
  knex('notes')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Note ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} note: ${err}` })
    })
}

// Remove all books on the list
exports.notesReset = async (req, res) => {
  // Remove all books from database
  knex
    .select('*') // select all records
    .from('notes') // from 'books' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Notes list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting book list: ${err}.` })
    })
}