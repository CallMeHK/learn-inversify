import { myContainer } from "./src/inversify.config";
import { TYPES } from "./src/types";
import { Warrior } from "./src/interfaces";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);

console.log(ninja.fight()); 
console.log(ninja.sneak()); 