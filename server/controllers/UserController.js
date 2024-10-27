const ApiError = require("../error/apiError");

class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async isAuth(req, res, next) {
    const {id} = req.query;
    if(!id){
      return next(ApiError.badRequest("ID не найден"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
