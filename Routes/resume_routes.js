import express from 'express';
import {getResumeEntries} from '../Routes_functions/resume_routes_functions.js'

const router = express.Router();

router.get("/", getResumeEntries);

export default router;