import profilepicture from "./images/profile-pic.jpg";

class Testimonial {
  constructor(rating, name, text, image) {
    this.rating = rating;
    this.name = name;
    this.text = text;
    this.image = image;
  }
}

const testimonials = [
  new Testimonial(4, "Bob", "This is a very good restaurant", profilepicture),
  new Testimonial(5, "Andy", "This is a very good restaurant", profilepicture),
  new Testimonial(4, "Molly", "This is a very good restaurant", profilepicture),
  new Testimonial(5, "Smith", "This is a very good restaurant", profilepicture),
];

export default testimonials;
