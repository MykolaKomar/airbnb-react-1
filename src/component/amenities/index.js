import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import animals from "./animals.svg";
import airportShuttle from "./airport-shuttle.svg";
import securityGroup from "./security-group.svg";
import roomOutline from "./room-outline.svg";
import child from "./child.svg";

export default function Amenities() {
  return (
    <Box shadow className="amenities">
      <Heading border> Зручності</Heading>

      <List />
    </Box>
  );
}

function List() {
  return (
    <ul className="amenities__list">
      <ListItem imageSrc={pool} hasPool>
        <span>Басей </span>
      </ListItem>
      <ListItem imageSrc={gym} hasGym>
        <span>Спортивний зал</span>
      </ListItem>
      <ListItem imageSrc={breakfast} hasFreeBreakfast>
        <span>Безкоштовний сніданок</span>
      </ListItem>
      <ListItem imageSrc={wifi} hasFreeWiFi>
        <span>Безкоштовний Wi-Fi</span>
      </ListItem>
      <ListItem imageSrc={parking} hasParking>
        <span>Безкоштовний вуличний паркінг</span>
      </ListItem>
      <ListItem imageSrc={animals} hasPetsAllowed>
        <span>Дозволено розміщення з домашніми тваринами</span>
      </ListItem>
      <ListItem imageSrc={airportShuttle} hasAirportShuttle>
        <span>Трансфер до/з аеропорту</span>
      </ListItem>
      <ListItem imageSrc={securityGroup} hasConciergeService>
        <span>Консьєрж сервіс</span>
      </ListItem>
      <ListItem imageSrc={roomOutline} hasRoomService>
        <span>Обслуговування номерів</span>
      </ListItem>
      <ListItem imageSrc={child} hasChildFriendly>
        <span>Підходить для дітей</span>
      </ListItem>
    </ul>
  );
}
