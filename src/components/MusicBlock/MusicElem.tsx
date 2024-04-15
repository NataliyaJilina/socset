type MusicElemProps = {
  imgLink: string,
  mainText: string,
  secondText: string;
};

export const MusicElem = ({
  imgLink,
  mainText,
  secondText,
}: MusicElemProps) => {
  return (
    <div className="MusicElem">
      <img src={`./img/music/album-${imgLink}.png`} alt="Album" />
      <div className="music__description">
        <p className="main__text">{mainText}</p>
        <p className="secondary__text">{secondText}</p>
      </div>
      <div className="plus-button _active"></div>
    </div>
  );
};
