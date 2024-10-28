import { Schema, model } from "mongoose";

const especieSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  discorevyLocation: {
    type: Schema.Types.String,
    required: true,
  },
  rarity: {
    type: Schema.Types.Number,
    required: true,
  },
  documented: {
    type: Schema.Types.Boolean,
    default: false,
  }
});

const Especie = model("Especie", especieSchema);

export default Especie
