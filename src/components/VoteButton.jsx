const VoteButton = ({ type, onClick, disabled = false }) => {
  const isLike = type === "like";

  return (
    <button
      className={`vote-button vote-button--${type}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={isLike ? "Me gusta" : "No me gusta"}
    >
      <span className="vote-button__icon">{isLike ? "👍" : "👎"}</span>
      <span className="vote-button__text">
        {isLike ? "Me gusta" : "No me gusta"}
      </span>
    </button>
  );
};

export default VoteButton;
