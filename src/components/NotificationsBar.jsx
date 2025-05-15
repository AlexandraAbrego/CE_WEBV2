import { icons } from "../assets/peopleIcons";
import { NotificationsBarElements } from "./NotificationsBarElements";
import { notificationsElements } from "../temp/tabledata";
export const NotificationsBar = () => {
  return (
    <div className="divBackground notsBar">
      <h3 >Notificaciones</h3>

      {notificationsElements.map((event, index) => (
       <NotificationsBarElements key={index} userName={event.user} iconName={icons[event.icon]} info={event.info}></NotificationsBarElements>
      ))}

    </div>
  )
}
