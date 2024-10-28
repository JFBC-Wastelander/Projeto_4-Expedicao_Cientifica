import e from "express";
import especie_router from "./routers/especie_router.js";
import expedicao_router from "./routers/expedicao_router.js";
import pesquisador_router from "./routers/pesquisador_router.js";
import "dotenv/config";
import "./db.js";

const app = e();

app.use(e.json());

app.use("/especie", especie_router)
app.use("/expedicao", expedicao_router)
app.use("/pesquisador", pesquisador_router)

app.listen(process.env.PORT, () => {
    console.log("Servidor conectado com sucesso!")
})