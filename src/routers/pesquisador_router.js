import { Router } from "express"

import {
    store,
    index,
    show,
    update,
    destroy
} from "../controllers/pesquisador_controller.js"

const router = Router()

router.post("/", store)
router.get("/", index)
router.get("/:id", show)
router.put("/:id", update)
router.destroy("/:id", destroy)

export default router