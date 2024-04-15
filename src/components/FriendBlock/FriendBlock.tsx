import { AppHeading } from "../Typography/AppHeading/AppHeading";
import { FriendElem } from "./FriendElem";
import { data } from "./data";

export const FriendBlock = () => {
  return (
    <div className="FriendsBlock">
      <div className="Friends__title">
      <AppHeading headingText="Друзья" headingType="h2" />
            <span className="count">{data.length}</span>
          </div>
          <div className="Friends__wrapper">
      {data &&
        data.map((elem) => (
          <FriendElem 
          imgLink={elem.imgLink} 
          mainText={elem.mainText} 
          />
        ))} 
      </div>
    </div>
  );
};
