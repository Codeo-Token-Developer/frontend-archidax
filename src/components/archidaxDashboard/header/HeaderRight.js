import React from "react";
import Notifications from "./headerRight/Notifications";
import ProfileHeader from "./headerRight/ProfileHeader";
import LanguageHeader from "./headerRight/LanguageHeader";

export default function HeaderRight() {
  return (
    <div className="row makeCenter">
      <LanguageHeader />

      <Notifications />

      <ProfileHeader />
    </div>
  );
}
