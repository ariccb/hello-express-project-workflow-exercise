let drinks = [
   { id: "pepsi", name: "Pepsi", calories: 100 },
   { id: "coffee", name: "Coffee", calories: 25 },
   { id: "water", name: "Water", calories: 0 },
];

export function getAllDrinks() {
   return drinks;
}
export function addDrink(newDrink) {
   drinks.push(newDrink);
}

export function updateDrink(name, update) {
   const drink = drinks.find((x) => x.id === name);
   console.log(`found ${drink}`);
   Object.assign(drink, update);
}

export function deleteDrink(name) {
   drinks = drinks.filter((x) => x.id !== name);
}
