const { Client } = require('pg');
const { argv } = require('node:process')

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
  const client = new Client({
    connectionString: argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

