import Expedicao from "../models/expedicao_model.js";

export const store = async (req, res) => {
  try {
    await Expedicao.create(req.body);
    res.status(201).json();
  } catch (err) {
    res.status(400).json(err);
  }
};

export const index = async (req, res) => {
  try {
    let content = await Expedicao.find().exec();
    res.json(content);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const show = async (req, res) => {
  try {
    let content = await Expedicao.findById(req.params.id).exec();
    res.json(content);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const update = async (req, res) => {
  try {
    let content = await Expedicao.findByIdAndUpdate(
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
    let content = await Expedicao.findByIdAndDelete(req.params.id).exec();
    res.json(content);
  } catch (err) {
    res.status(400).json(err);
  }
};
