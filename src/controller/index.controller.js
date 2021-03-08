const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: "5432",
  user: "postgres",
  password: "postgres",
  database: "firstapi",
});

const getUsers = async (req, res) => {
  const response = await pool.query("SELECT * FROM users");
  res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const response = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  res.status(200).json(response.rows);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const response = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email]
  );
  res.json({
    message: "User created succesfully",
    body: {
      user: { name, email },
    },
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const response = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id]
  );
  res.json("User updated successfully");
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const response = await pool.query("DELETE FROM users WHERE id = $1", [id]);
  res.json(`User ${id} deleted successfully`);
};

module.exports = { getUsers, createUser, getUserById, deleteUser, updateUser };
