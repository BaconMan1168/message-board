const { Client } = require('pg');
const { argv } = require('node:process')
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  messagetext TEXT,
  username TEXT,
  date TEXT
);

INSERT INTO messages (messagetext, username, date) 
VALUES
  ('Hello World', 'Daniel', 'Mon Oct 20 2025'),
  ('Im using the message board', 'John', 'Tue Oct 21 2025'),
  ('This sucks', 'L', 'Wed Oct 22 2025');
`;




async function main() {
  console.log("seeding...");
  const connectionString = argv[2] || "postgresql://danielguirao:baconater@localhost:5432/message_board";
  const client = new Client({
    connectionString
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

