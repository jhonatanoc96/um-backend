const mongoose = require('mongoose');

const Item = require('../models/item');

module.exports = {
  async getAll() {
    const items = await Item.find();

    return items;
  },

  async getById(id) {
    const item = await Item.findById(id);

    return item;
  },

  async getByUniqueId(id) {
    const item = await Item.find({ id });

    return item;
  },

  async getByQuery(query) {
    const items = await Item.find({ title: new RegExp(query, 'i') });

    return items;
  },

  async save(req) {
    const itemStored = await req.save();

    return itemStored;
  },

};
