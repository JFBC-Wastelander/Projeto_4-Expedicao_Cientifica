import Especie from "../models/especie_model.js";

export const store = async (req, res) => {
  try {
    await Especie.create(req.body);
    res.status(201).json();
  } catch (err) {
    res.status(400).json(err);
  }
};

export const index = async (req, res) => {
  try {
    let content = await Especie.find().exec();
    res.json(content);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const show = async (req, res) => {
  try {
    let content = await Especie.findById(req.params.id).exec();
    res.json(content);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const update = async (req, res) => {
  try {
    let content = await Especie.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec();
    res.json(content);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const destroy = async (req, res) => {
  try {
    let content = await Especie.findByIdAndDelete(req.params.id).exec();
    res.json(content);
  } catch (err) {
    res.status(400).json(err);
  }
};
