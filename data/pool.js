
const { Pool } = require('pg');
const { argv } = require('node:process');
require("dotenv").config();

const connectionString = argv[2] || "postgresql://danielguirao:baconater@localhost:5432/message_board";

module.exports = new Pool({
  connectionString,
   ssl: connectionString.includes('render.com')
   ? { rejectUnauthorized: false }  
   : false                          
});