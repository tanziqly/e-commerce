import db from "../db.js";

class UserController {
  async createUser(req, res) {
    const { email, username, userpassword } = req.body;
    const newPerson = await db.query(
      `INSERT INTO person (email, username,  userpassword) values ($1, $2, $3) RETURNING *`,
      [email, username, userpassword]
    );
    res.json(newPerson.rows[0]);
  }
  async loginUser(req, res) {}
  async getUser(req, res) {}
  async deleteUser(req, res) {}
}

export default new UserController();
