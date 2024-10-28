import mongoose from "mongoose";

(async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Conexão com o banco efetuada com sucesso!");
  } catch (err) {
    console.log(err);
  }
})();
