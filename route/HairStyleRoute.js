import express from "express";
import * as HairStyleControl from "../controller/HairStyleController.js";

const router = express.Router()

router.post("/ver1/hairstyle", HairStyleControl.AddHairStyle)
router.get("/ver1/hairstyle", HairStyleControl.GetAllHairStyle)

export default router;