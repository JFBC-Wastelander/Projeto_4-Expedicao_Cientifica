import Pesquisador from "../models/pesquisador_model.js";

export const store = async (req, res) => {
  try {
    await Pesquisador.create(req.body);
    res.status(201).json();
  } catch (err) {
    res.status(400).json(err);
  }
};

export const index = async (req, res) => {
  try {
    let content = await Pesquisador.find().exec();
    res.json(content);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const show = async (req, res) => {
  try {
    let content = await Pesquisador.findById(req.params.id).exec();
    res.json(content);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const update = async (req, res) => {
  try {
    let content = await Pesquisador.findByIdAndUpdate(
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
    let content = await Pesquisador.findByIdAndDelete(req.params.id).exec();
    res.json(content);
  } catch (err) {
    res.status(400).json(err);
  }
};
