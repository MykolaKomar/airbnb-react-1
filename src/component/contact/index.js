import "./index.css";

export default function ContactInfo({
  name,
  image,
  responseRate,
  responseTime,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <img
        className="contact__avatar"
        src={image}
        alt="avatar"
        height={80}
        width={80}
      />
      <h1 className="contact__title"> Господар - {name} </h1>

      <div className="contact__info">
        <span className="contact__sub-value">{phone} </span>

        <span className="contact__sub-value">{responseTime}</span>

        <span className="contact__sub-value">
          {responseRate}% відсотків швидкості відгуку
        </span>
      </div>
      <div className="contact__description">
        <span className="contact__sub-value">{info} </span>
      </div>
    </div>
  );
}
