import { AppHeading } from "../Typography/AppHeading/AppHeading";
import { FriendslistElem } from "./FriendslistElem";
import { data } from "./data";

export const Friendslist = () => {
  return (
    <div className="List">
      <div className="List__title">
        <AppHeading headingText="Близкие друзья" headingType="h2" />
        <span className="count">{data.length}</span>
      </div>
      {data &&
        data.map((elem) => (
          <FriendslistElem
            imgLink={elem.imgLink}
            mainText={elem.mainText}
            secondText={elem.secondText}
            badge={elem.badge}
          />
        ))}
    </div>
  );
};
