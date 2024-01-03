import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import "./index.css";
import guest from "./guests.svg";
import bath from "./baths.svg";
import bed from "./bed.svg";
import bedroom from "./bedrooms.svg";

export default function Property({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="property">
      <Heading border> Деталі властивості:</Heading>

      <List
        imageSrc
        guests={guests}
        bedrooms={bedrooms}
        beds={beds}
        baths={baths}
      />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="property__list">
      <ListItem imageSrc={guest}>
        <span>{guests}</span>
        <span>гості </span>
      </ListItem>
      <ListItem imageSrc={bedroom}>
        <span>{bedrooms}</span>
        <span>спальня</span>
      </ListItem>
      <ListItem imageSrc={bed}>
        <span>{beds}</span>
        <span>ліжко</span>
      </ListItem>
      <ListItem imageSrc={bath}>
        <span>{baths}</span>
        <span>ванна кімната </span>
      </ListItem>
    </ul>
  );
}
