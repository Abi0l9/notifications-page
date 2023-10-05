import records from "../data";
import { INotifsRecord } from "../types";

export const getAllNotifications = (): INotifsRecord[] => records;

export const getNotif = (id: string): INotifsRecord | undefined => {
  const data = records.find((notif) => notif.notification.id === id);
  return data;
};
