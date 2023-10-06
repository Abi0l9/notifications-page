export interface IUserData {
  name: string;
  profileImg: string;
}

export interface IPostNotificationData {
  id: string;
  time: string;
  content: string;
  type: "postReaction" | "postComment";
  unread: boolean;
}

export interface IMessageNotificationData {
  id: string;
  time: string;
  body: string;
  type: "message";
  unread: boolean;
}

export interface IGroupNotificationData {
  id: string;
  time: string;
  groupName: string;
  type: "groupJoin" | "groupExit";
  unread: boolean;
}

export type TNotification =
  | IPostNotificationData
  | IGroupNotificationData
  | IMessageNotificationData;

export interface INotifsRecord extends IUserData {
  notification: TNotification;
}
