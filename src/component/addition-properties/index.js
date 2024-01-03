import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import "./index.css";

export default function AdditionalProperties({
  houseRules,
  cancellationPolicy,
  localTransportation,
  hostLanguages,
  specialOffers,
  checkInInstructions,
}) {
  return (
    <Box shadow className="property">
      <Heading border> Деталі властивості:</Heading>

      <List
        houseRules={houseRules}
        cancellationPolicy={cancellationPolicy}
        localTransportation={localTransportation}
        hostLanguages={hostLanguages}
        specialOffers={specialOffers}
        checkInInstructions={checkInInstructions}
      />
    </Box>
  );
}

function List({
  houseRules,
  cancellationPolicy,
  localTransportation,
  hostLanguages,
  specialOffers,
  checkInInstructions,
}) {
  return (
    <ul className="property__list">
      <ListItem title="Правила дому">
        <span>{houseRules}</span>
      </ListItem>
      <ListItem title="Політика скасування">
        <span>{cancellationPolicy}</span>
      </ListItem>
      <ListItem title="Місцевий транспорт">
        <span>{localTransportation}</span>
      </ListItem>
      <ListItem title="Мови хоста">
        <span>{hostLanguages}</span>
      </ListItem>
      <ListItem title="Спеціальні пропозиції:">
        <span>{specialOffers}</span>
      </ListItem>
      <ListItem title="Інструкції щодо реєстрації">
        <span>{checkInInstructions}</span>
      </ListItem>
    </ul>
  );
}
