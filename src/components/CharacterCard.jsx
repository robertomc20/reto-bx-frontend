import placerHolderHero from "../assets/placerholder-hero.jpg";
import VoteButton from "./VoteButton";

const CharacterCard = ({ name, image, onDislike, onLike, loadingVote }) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="character-card">
      <div className="character-card__image-container">
        <img
          src={image}
          alt={formattedName || "/placeholder-hero.png"}
          className="character-card__image"
          onError={(e) => {
            e.currentTarget.src = placerHolderHero;
          }}
        />
      </div>

      <div className="character-card__information-container">
        <p className="character-card__name">{formattedName}</p>
      </div>

      <div className="character-card__actions-container">
        <VoteButton type="like" onClick={onLike} disabled={loadingVote} />
        <VoteButton type="dislike" onClick={onDislike} disabled={loadingVote} />
      </div>
    </div>
  );
};

export default CharacterCard;
