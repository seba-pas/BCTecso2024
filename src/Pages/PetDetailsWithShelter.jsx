import { HeaderButton, Detail } from "../components";

import image from "../assets/images/pets/Mascotas_Bruno02.png";
import arrow from "../assets/images/arrow-left.jpg";
import edit from "../assets/images/edit.jpg";

const details = {
  name: "Garfield",
  status: "En adopción",
  address: "Rosario ( 2,5km )",
  description: "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non excepturi nostrum numquam sed quia corporis expedita corrupti eaque. Beatae vel sunt consectetur unde fuga repellendus voluptatem, totam dolorem maxime. Quia, praesentium recusandae culpa assumenda laboriosam reprehenderit pariatur vitae accusantium beatae aperiam qui deleniti unde numquam, nulla id ullam officiis ducimus mollitia veniam. Dolorem iste odit aliquid porro aliquam illum! Qui esse perferendis expedita omnis minus quis id est porro, veniam hic consequuntur iusto nihil dolor saepe recusandae culpa magnam beatae aliquam eos! Mollitia officia quam alias magni. Consequatur, error? Consequatur delectus, perferendis eligendi laboriosam id aliquam ad eos voluptatem esse adipisci tenetur. Aliquid labore dolores fuga, corporis quas et vitae fugiat, iste odio ad corrupti provident eius at quam? Exercitationem molestiae eum nam? Nisi dolorem, perferendis eveniet aperiam quia corrupti voluptates, assumenda mollitia iusto architecto necessitatibus accusantium optio omnis esse nulla magnam, temporibus quibusdam nemo. Tempora ex iure perferendis. Facere illum quibusdam assumenda. Esse distinctio molestiae dese",
  tags: [
    {
      type: "Sexo",
      value: "Macho",
    },
    {
      type: "Color",
      value: "Naranja",
    },
    {
      type: "Raza",
      value: "Persa",
    },
    {
      type: "Edad",
      value: "2 años",
    },
  ],
};

export const PetDetailsWithShelter = () => {
  return (
    <section className="w-100 min-vh-100 mx-auto d-flex flex-column align-items-center position-relative" style={{ maxWidth: "640px" }}>
      <header className="position-absolute  start-0 end-0 mx-3 d-flex justify-content-between" style={{ marginTop: "44px" }}>
        <HeaderButton to="/home">
          <img src={arrow} alt="back-button" />
        </HeaderButton>
        <HeaderButton to="/form_pet/1">
          <img src={edit} alt="back-button" />
        </HeaderButton>
      </header>
      <img src={image} alt="caca" className="w-100 object-fit-cover" height="400px" />
      <Detail {...details} />
    </section>
  );
};
