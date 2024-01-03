import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import "./index.css";

import "./index.css";

export default function NearbyAttractions({ list }) {
  return (
    <Box shadow className="property">
      <Heading> Пам'ятки поблизу </Heading>

      <div className="property__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Item({ link, name }) {
  return (
    <ul>
      <ListItem>
        <a href={link}>{name}</a>
      </ListItem>
    </ul>
  );
}
