import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";
import "./index.css";

export default function ReviewList({ list }) {
  return (
    <div className="review__block">
      <Heading> Відгуки клієнтів </Heading>

      <div className="review__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review">
      <span className="review__title">{guestName} </span>
      <span className="review__rating">Rating: {rating} </span>
      <span className="review__info">{review}</span>
    </Box>
  );
}
