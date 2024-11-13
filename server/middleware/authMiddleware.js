const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "Отсутствует токен авторизации" });
    }

    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Не авторизован" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    return next();
  } catch (e) {
    console.error("Ошибка авторизации:", e.message);
    return res.status(401).json({ message: "Не авторизован" });
  }
};
