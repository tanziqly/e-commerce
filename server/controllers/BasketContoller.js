const { Basket } = require("../models/models");
const ApiError = require("../error/apiError");
const { BasketDevice } = require("../models/models");

class BasketController {
  async addDevice(req, res, next) {
    try {
      const deviceId = req.params.id;
      const userId = req.user.id;
      const basket = await Basket.findOne({ where: { userId } });
      if (!basket) {
        return next(ApiError.badRequest("Корзина не найдена!"));
      }
      const basketDevice = await BasketDevice.create({
        basketId: basket.id,
        deviceId,
      });
      return res.json(basketDevice);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getBasket(req, res) {
    try {
      const userId = req.user.id;
      const basket = await Basket.findOne({ where: { userId } });
      if (!basket) {
        return next(ApiError.badRequest("Корзина не найдена!"));
      }
      const basketDevices = await BasketDevice.findAll({
        where: { basketId: basket.id },
      });
      return res.json(basketDevices);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async deleteDevice(req, res, next) {
    try {
      const deviceId = req.params.id;
      const userId = req.user.id;
      const basket = await Basket.findOne({ where: { userId } });
      if (!basket) {
        return next(ApiError.badRequest("Корзина не найдена!"));
      }
      const result = await BasketDevice.destroy({
        where: {
          basketId: basket.id,
          deviceId,
        },
      });
      if (result === 0) {
        return next(ApiError.badRequest("Товар не найден!"));
      }
      return res.json({ message: "Товар успешно удален!" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BasketController();
