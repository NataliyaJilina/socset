type FriendslistElemProps = {
  imgLink: string;
  mainText: string;
  secondText: string;
  badge: number;
};

export const FriendslistElem = ({
  imgLink,
  mainText,
  secondText,
  badge,
}: FriendslistElemProps) => {
  return (
    <div className="UserElem">
      <img src={`${imgLink}`} alt="User" />
      <div className="user__description">
        <p className="main__text">{mainText}</p>
        <p className="secondary__text _online">{secondText}</p>
      </div>
      <span className="Badge">{badge}</span>
    </div>
  );
};
