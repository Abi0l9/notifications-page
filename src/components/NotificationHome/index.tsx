import { useEffect, useState } from "react";
import {
  getAllNotifications,
  markAllRead,
  markAllUnread,
} from "../../services/notifs";
import Card from "./Card";
import { INotifsRecord } from "../../types";
import Header from "./Header";

const NotificationHome = () => {
  const [notifs, setNotifs] = useState<INotifsRecord[]>();
  const [totalUnread, setTotalUnread] = useState<number>(0);
  const [readAll, setReadAll] = useState(false);

  const getTotalUnread = (data: INotifsRecord[]) => {
    const total = data.filter((d) => d.notification.unread === true)?.length;
    setTotalUnread(total);
  };

  useEffect(() => {
    const data = getAllNotifications();
    getTotalUnread(data);
    setNotifs(data);
  }, []);

  const updateNotifications = (data: INotifsRecord[]) => {
    setNotifs(data);
    getTotalUnread(data);
  };

  const markAll = () => {
    const data = markAllRead();
    setNotifs(data);
    getTotalUnread(data);
  };

  const markAllAsUnread = () => {
    const data = markAllUnread();
    setNotifs(data);
    getTotalUnread(data);
  };

  const toggleReadAll = () => {
    setReadAll(!readAll);
    !readAll ? markAll() : markAllAsUnread();
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
      <Header readAll={readAll} markAll={toggleReadAll} total={totalUnread} />
      {cards}
    </div>
  );
};

export default NotificationHome;
