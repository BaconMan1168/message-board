
const { Pool } = require('pg');
const { argv } = require('node:process');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const connectionString = argv[2] || process.env.DATABASE_URL || "postgresql://danielguirao:baconater@localhost:5432/message_board";

module.exports = new Pool({
  connectionString,
   ssl: connectionString.includes('render.com')
   ? { rejectUnauthorized: false }  
   : false                          
});