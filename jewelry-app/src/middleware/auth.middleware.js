const pool = require('../config/db');

module.exports = async (req, res, next) => {
  const userId = req.headers['user-id'];

  if (!userId) {
    return res.status(401).json({ message: 'User not logged in' });
  }

  const result = await pool.query(
    'SELECT id, role FROM users WHERE id = $1',
    [userId]
  );

  if (!result.rows.length) {
    return res.status(401).json({ message: 'Invalid user' });
  }

  req.user = result.rows[0];
  next();
};
