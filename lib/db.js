const { Pool } = require('pg');
const pool = new Pool({
  // Your database connection parameters
});

async function getUserById(userId) {
  const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
  return rows[0];
}

// Other database functions...
