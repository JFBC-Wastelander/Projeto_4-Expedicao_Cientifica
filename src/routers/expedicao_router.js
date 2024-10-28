import { Router } from "express"

import { store } from "../controllers/expedicao_controller.js"

const router = Router()

router.post("/", store)

export default router