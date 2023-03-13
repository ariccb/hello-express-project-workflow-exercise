import express from "express";
import { getAllDrinks, addDrink, updateDrink, deleteDrink } from "./data.js";

export const drinkHandler = express.Router();

drinkHandler.get("/", (req, res) => {
   res.send(getAllDrinks());
});

drinkHandler.post("/", (req, res) => {
   const newDrink = req.body;
   addDrink(newDrink);

   const drinksAvailable = getAllDrinks();
   res.send(getAllDrinks());
});

drinkHandler.patch("/:id", (req, res) => {
   const name = req.params.id;
   const update = req.body;
   updateDrink(name, update);

   res.send(getAllDrinks());
});

drinkHandler.delete("/:id", (req, res) => {
   const drinkToDelete = req.params.id;
   deleteDrink(drinkToDelete);

   res.send(getAllDrinks());
});
