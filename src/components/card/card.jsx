import "./card.css";

export const Card = ({ title, cover_image_url, score, year }) => {
  return (
    <div className="Card">
      <img src={cover_image_url} alt={title + "cover image"} />
      <h3>{title}</h3>
      <div className="GameInfo">
        <p>{year}</p>
        <p>Metacritic: {score}</p>
      </div>
    </div>
  );
};
