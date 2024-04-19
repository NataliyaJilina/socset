type FollowersElemProps = {
    imgLink: string,
    mainText: string,
    secondaryText: string,
    badgeNumber: number
}




export const FollowersElem = ({
    badgeNumber,
    imgLink,
    mainText,
    secondaryText,
}: FollowersElemProps) => {
    return (
        <div className="UserElem">
            <img src={`./img/profile/profile-img-${imgLink}.jpeg`} alt="User" />
            <div className="user__description">
              <p className="main__text">{mainText}</p>
              <p className="secondary__text">{secondaryText}</p>
            </div>
            <span className="Badge">{badgeNumber}</span>
          </div>
    )
}