type MusicBlockElemProps = {
    imgLink: string,
    mainText: string,
    secondaryText: string,
}

export const MusicBlockElem = ({imgLink, mainText, secondaryText,}: MusicBlockElemProps) => {
    return(
        <div className="MusicElem">
        <img src={`./img/music/album-${imgLink}.png`} alt="Album" />
        <div className="music__description">
          <p className="main__text">{mainText}</p>
          <p className="secondary__text">{secondaryText}</p>
        </div>
        <div className="plus-button _active"></div>
      </div>
    )
}