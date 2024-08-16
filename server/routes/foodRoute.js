import express from 'express';
import { addFood, listFood, removeFoodItem } from '../controllers/foodConroller.js';
import multer from 'multer';

const foodRouter = express.Router();

// Image storage engine
const imageStorage = multer.diskStorage({
    destination: "uploads", 
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: imageStorage });

foodRouter.post('/add', upload.single("image"), addFood);
foodRouter.get('/list', listFood)
foodRouter.post('/remove', removeFoodItem)

export default foodRouter;
