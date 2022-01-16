type CardinalDirection = "North" | "South" | "East" | "West";

let direction: CardinalDirection;
direction = "North";
direction = "n0r7h"; // Error
direction = "South";

const move = (distance: number, direction: CardinalDirection) => {
  console.log(`Moving ${distance} meters towards ${direction}`);
};

move(10, "East");

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

const rollDice = () => {
  return (Math.floor(Math.random() * 6) + 1) as DiceValue;
};

if (rollDice() === 7) {
  throw new Error("Not possible!");
}
