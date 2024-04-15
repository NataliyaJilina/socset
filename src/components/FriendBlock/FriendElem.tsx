type FriendElemProps = {
  imgLink: string;
  mainText: string;
};

export const FriendElem = ({ imgLink, mainText }: FriendElemProps) => {
  return (
    <div className="friend">
      <img src={`./img/users/${imgLink}.jpeg`} alt="Friend" />
      <span className="friend__name">{mainText}</span>
    </div>
  );
};
