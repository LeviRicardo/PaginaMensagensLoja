const { Pool } = require('pg')

const connectionString = ''
const db = new Pool({connectionString})

module.exports = db