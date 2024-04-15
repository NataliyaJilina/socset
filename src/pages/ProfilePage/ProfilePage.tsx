import { AppPost } from "../../components/AppPost/AppPost";
import { AppRepost } from "../../components/AppRepost/AppRepost";
import { Bio } from "../../components/Bio/Bio";
import { FollowersList } from "../../components/FollowersList/FollowersList";
import { FriendBlock } from "../../components/FriendBlock/FriendBlock";
import { MusicBlock } from "../../components/MusicBlock/Musicblock";
import { Navbar } from "../../components/NavBar/Navbar";
import { ProfileHeader } from "../../components/ProfileHeader/Profileheader";
import { Header } from "../../components/UI/Header/Header";
import { UserPosts } from "../../components/UserPosts/UserPosts";
import { WhatsNew } from "../../components/WhatsNew/Whatsnew";
import "./ProfilePage.scss";
import { SCProfilePage } from "./ProfilePage.styled";

export const ProfilePage = () => {
  return (
<SCProfilePage>
    <Header />
      <aside className="LeftSide">
        <Navbar />
        <FollowersList />
      </aside>
      <ProfileHeader />
      <main className="Main">
        <WhatsNew />
        <UserPosts />
        <AppPost />
        <AppRepost />
      </main>
      <aside className="RightSide">
        <Bio />
        <FriendBlock />
        <MusicBlock />
      </aside>
      </SCProfilePage>
  );
};
