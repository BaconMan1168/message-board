const { Pool } = require('pg');
require("dotenv").config();
const { argv } = require('node:process')

module.exports = new Pool({
    connectionString: argv[2]
})