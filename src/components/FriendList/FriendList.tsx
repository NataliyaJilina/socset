import { AppHeading } from "../Typography/AppHeading"
import { FriendListElem } from "./FriendListElem"
import { dataFriend } from "./dataFriend"

export const FriendList = () => {
    return(
        <div className="List">
          <div className="List__title">
            <AppHeading headingText="Близкие друзья" headingType="h2"/>
            
            <span className="count">{dataFriend.length}</span>
          </div>
          {dataFriend && dataFriend.map((elem) => (
           <FriendListElem imgLink={elem.imgLink} mainText={elem.mainText} secondaryText={elem.secondaryText} Badge={3}/> 
          ))}
        </div>
    )
}