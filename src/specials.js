import greeksalad from "./images/greek salad.webp";
import bruchetta from "./images/bruchetta.webp";
import lemondessert from "./images/lemon-dessert.webp";

class Special {
  constructor(name, description, cost, image) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.image = image;
  }
}

const specials = [
  new Special(
    "Greek Salad",
    "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    12.99,
    greeksalad
  ),
  new Special(
    "Bruchetta",
    "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    5.99,
    bruchetta
  ),
  new Special(
    "Lemon Dessert",
    "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    5,
    lemondessert
  ),
];

export default specials;
