const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'kirtan',
  password: 'Kirtan@3114',
  database: 'jewelry_db',
  port: 5432
});

module.exports = pool;
