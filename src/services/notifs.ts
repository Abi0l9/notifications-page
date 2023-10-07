import records from "../data";
import { INotifsRecord } from "../types";

export const getAllNotifications = (): INotifsRecord[] => records;

export const getNotif = (id: string): INotifsRecord | undefined => {
  const data = records.find((notif) => notif.notification.id === id);
  return data;
};

export const markRead = (id: string) => {
  const data = records.map((notif) => {
    if (notif.notification.id === id) {
      notif.notification.unread = false;
      return notif;
    }
    return notif;
  });
  return data;
};

export const markAllRead = () => {
  const data = records.map((notif) => {
    notif.notification.unread = false;

    return notif;
  });
  return data;
};

export const markAllUnread = () => {
  const data = records.map((notif) => {
    notif.notification.unread = true;

    return notif;
  });
  return data;
};
