type FriendListElemProps = {
    imgLink: string,
    mainText: string,
    secondaryText: string,
    Badge: number,
}


export const FriendListElem = ({imgLink, mainText, secondaryText, Badge,}: FriendListElemProps) => {
    return (
        <div className="UserElem">
        <img src={imgLink} alt="User" />
        <div className="user__description">
          <p className="main__text">{mainText}</p>
          <p className="secondary__text _online">{secondaryText}</p>
        </div>
        <span className="Badge">{Badge}</span>
      </div>
    )
}