import { icons } from "../assets/peopleIcons";
import { NotificationsBarElements } from "./NotificationsBarElements";

export const NotificationsBar = () => {
  return (
    <div className="divBackground notsBar">
      <h3 >Notificaciones</h3>
      <NotificationsBarElements iconName={icons.icon1}></NotificationsBarElements>
      <NotificationsBarElements iconName={icons.icon10}></NotificationsBarElements>
      <NotificationsBarElements iconName={icons.icon2}></NotificationsBarElements>
      <NotificationsBarElements iconName={icons.icon3}></NotificationsBarElements>
      <NotificationsBarElements iconName={icons.icon4}></NotificationsBarElements>
      <NotificationsBarElements iconName={icons.icon5}></NotificationsBarElements>
      <NotificationsBarElements iconName={icons.icon6}></NotificationsBarElements>
      <NotificationsBarElements iconName={icons.icon7}></NotificationsBarElements>
      <NotificationsBarElements iconName={icons.icon8}></NotificationsBarElements>
      <NotificationsBarElements iconName={icons.icon9}></NotificationsBarElements>
      <NotificationsBarElements iconName={icons.icon2}></NotificationsBarElements>
      <NotificationsBarElements iconName={icons.icon1}></NotificationsBarElements>
      <NotificationsBarElements iconName={icons.icon4}></NotificationsBarElements>
      <NotificationsBarElements iconName={icons.icon2}></NotificationsBarElements>

    </div>
  )
}
