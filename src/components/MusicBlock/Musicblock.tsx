import { AppHeading } from "../Typography/AppHeading/AppHeading";
import { MusicElem } from "./MusicElem";
import { data } from "./data";

export const MusicBlock = () => {
  return (
    <div className="MusicBlock">
      <div className="MusicBlock__title">
        <AppHeading headingText="Вы недавно слушали" headingType="h2" />
        <span>{data.length}</span>
      </div>
      {data &&
        data.map((elem) => (
          <MusicElem
            imgLink={elem.imgLink}
            mainText={elem.mainText}
            secondText={elem.secondText}
          />
        ))}
    </div>
  );
};
