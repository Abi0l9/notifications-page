import { useEffect, useState } from "react";
import { getAllNotifications } from "../../services/notifs";
import Card from "./Card";
import { INotifsRecord } from "../../types";

const NotificationHome = () => {
  const [notifs, setNotifs] = useState<INotifsRecord[]>();

  useEffect(() => {
    const data = getAllNotifications();
    setNotifs(data);
  }, []);

  const updateNotifications = (data: INotifsRecord[]) => {
    setNotifs(data);
  };

  const cards = notifs?.map((notif) => {
    return (
      <Card
        update={updateNotifications}
        data={notif}
        key={notif.notification.id}
      />
    );
  });

  return (
    <div className="w-full flex flex-col min-h-screen gap-y-2  p-1">
      {cards}
    </div>
  );
};

export default NotificationHome;
