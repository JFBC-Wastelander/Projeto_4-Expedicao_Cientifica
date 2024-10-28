import { Schema, model } from "mongoose";

const especieSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  fieldOfStudy: {
    type: Schema.Types.String,
    required: true,
  },
  expeditionsParticipated: {
    type: Schema.Types.Number,
    required: true,
  },
});

export const Especie = model("Especie", especieSchema);
