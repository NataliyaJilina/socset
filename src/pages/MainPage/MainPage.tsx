import { Navbar } from "../../components/NavBar/Navbar";
import { FollowersList } from "../../components/FollowersList/FollowersList";
import { WhatsNew } from "../../components/WhatsNew/Whatsnew";
import { History } from "../../components/History/History";
import { AppPost } from "../../components/AppPost/AppPost";
import { AppRepost } from "../../components/AppRepost/AppRepost";
import { Friendslist } from "../../components/FriendsList/Friendslist";
import { MusicBlock } from "../../components/MusicBlock/Musicblock";
import { Header } from "../../components/UI/Header/Header";
import "./MainPage.scss";
import { SCMainPage } from "./MainPage.styled";

export const MainPage = () => {
  return (
    <SCMainPage>
      <Header/>
      <aside className="LeftSide">
        <Navbar/>
        <FollowersList/>
      </aside>
      <main className="Main">
        <WhatsNew/>
        <History/>
        <AppPost/>
        <AppRepost/>
      </main>
      <aside className="RightSide">
        <Friendslist/>
        <MusicBlock/>    
      </aside>
    </SCMainPage>
  );
};
