import express from 'express';
import { getDestinations, addDestination } from '../controllers/destinationController.js';
import upload from '../middleware/upload.js';
const router = express.Router();

router.get('/', getDestinations);
router.post("/add", upload.single("image"),addDestination);

export default  router;