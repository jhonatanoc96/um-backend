const Item = require('../models/item');
const itemService = require('../services/item.service');

module.exports = {

  async getAllItems(req, res, next) {
    const items = await itemService.getAll();

    return res.status(200).send({ items });
  },

  async getItemById(req, res, next) {
    const { id } = req.params;

    const item = await itemService.getById(id);

    return res.status(200).send({ item });
  },

  async getItemsByQuery(req, res, next) {
    const { query } = req.params;

    const items = await itemService.getByQuery(query);

    return res.status(200).send({ items });
  },

  async deleteItem(req, res, next) {
    const { id } = req.params;

    const item = await itemService.getById(id);

    console.log('Item: ', item);

    // item.delete();

    return res.status(200).send({ item });
  },

  async saveItem(req, res) {
    const itemInstance = new Item();

    itemInstance.id = req.body.id;
    itemInstance.title = req.body.title;
    itemInstance.description = req.body.description;
    itemInstance.price = req.body.price;
    itemInstance.discountPercentage = req.body.discountPercentage;
    itemInstance.rating = req.body.rating;
    itemInstance.stock = req.body.stock;
    itemInstance.brand = req.body.brand;
    itemInstance.category = req.body.category;
    itemInstance.thumbnail = req.body.thumbnail;
    itemInstance.images = req.body.images;

    try {

      const newItem = await itemService.save(itemInstance);
      return res.status(200).send({ newItem });

    } catch (err) {
      console.error("ERROR: ", err.toString());

      return res.status(500).send({ err });
    }
  },

};