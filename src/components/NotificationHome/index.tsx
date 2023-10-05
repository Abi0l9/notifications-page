import { getAllNotifications } from "../../services/notifs";
import Card from "./Card";

const NotificationHome = () => {
  const data = getAllNotifications();
  return (
    <div className="w-full flex flex-col min-h-screen gap-y-2  p-1">
      {data.map((notif) => (
        <Card data={notif} key={notif.notification.id} />
      ))}
    </div>
  );
};

export default NotificationHome;
