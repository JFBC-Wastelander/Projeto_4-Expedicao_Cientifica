import Expedicao from "../models/expedicao_model.js";

const store = async (req, res) => {
  try {
    await Expedicao.create(req.body);
    res.status(201).json();
  } catch (err) {
    res.status(400).json(err);
  }
};

export default store