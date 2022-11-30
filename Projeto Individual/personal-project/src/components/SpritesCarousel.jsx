import { Carousel } from "flowbite-react";

export default function SpritesCarousel(props) {
  const sprites = props.sprites;
  let validSprites = [];

  for (const [key, value] of Object.entries(sprites)) {
    if (value && key !== "other" && key !== "versions") {
      validSprites.push(value);

    }
  }

  validSprites.reverse();

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
        {sprites &&
          validSprites.map((sprite, index) => (
            <img src={sprite} key={index} />
        ))}
      </Carousel>
    </div>
  );
}