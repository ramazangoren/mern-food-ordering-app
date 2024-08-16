import fs from "fs";
import foodModel from "../models/foodModel.js";

// Add food
const addFood = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    let food_image_filename = `${req.file.filename}`;

    const food = new foodModel({
      name,
      description,
      price,
      category,
      image: food_image_filename,
    });

    await food.save();
    res.json({ success: true, message: "Food added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in adding food" }); // Corrected typo: `es.json` to `res.json`
  }
};

const listFood = async (req, res) => {
  try {
    const foodItems = await foodModel.find({});
    res.json({ success: true, data: foodItems, message: "got food items" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "did not get food items" });
  }
};

const removeFoodItem = async (req, res) => {
  try {
    const itemToBeRemoved = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${itemToBeRemoved.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id)
    res.json({ success: true, message: "food item removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error removing food item" });
  }
};

export { addFood, listFood, removeFoodItem };
