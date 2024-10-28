import { Schema, model } from "mongoose"

const expedicaoSchema = new Schema ({
    location: {
        type: Schema.Types.String,
        required: true,
    },
    date: {
        type: Schema.Types.Date,
        required: true,
    },
    participants: {
        type: Schema.Types.ObjectId,
        ref: "Pesquisador",
        required: true,
    },
    speciesFound: {
        type: Schema.Types.ObjectId,
        ref: "Especie",
        required: true,
    }
})

export const Expedicao = model("Expedicao", expedicaoSchema)