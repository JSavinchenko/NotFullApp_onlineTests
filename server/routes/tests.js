import { Router } from "express";
import { checkAuth } from '../utils/checkAuth.js'
import { createTest } from "../controllers/tests.js";

const router = new Router()

//Create test
// http://localhost:3002/api/userstests  //??? или tests
router.post('/', checkAuth, createTest)


export default router