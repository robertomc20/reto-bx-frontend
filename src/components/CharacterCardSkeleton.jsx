const CharacterCardSkeleton = () => {
  return (
    <div className="character-card skeleton">
      <div className="character-card__image-container" />
      <div className="character-card__information-container">
        <p className="character-card__name"></p>
      </div>
      <div className="character-card__actions-container">
        <p className="vote-button"></p>
        <p className="vote-button"></p>
      </div>
    </div>
  );
};

export default CharacterCardSkeleton;
