import { AppHeading } from "../Typography/AppHeading/AppHeading";
import { FollowerElem } from "./FollowerElem";
import { data } from "./data";

export const FollowersList = () => {
  return (
    <div className="List">
      <div className="List__title">
        <AppHeading headingText="Подписки" headingType="h2" />
        <span className="count">{data.length}</span>
      </div>
      {data &&
        data.map((elem) => (
          <FollowerElem
            imgLink={elem.imgLink}
            mainText={elem.mainText}
            secondaryText={elem.secondaryText}
            badge={elem.badge}
          />
        ))}
    </div>
  );
};
