export interface IUserData {
  name: string;
  profileImg: string;
}

export interface IPostNotificationData {
  id: string;
  time: string;
  content: string;
  type: "postReaction" | "postComment";
}

export interface IMessageNotificationData {
  id: string;
  time: string;
  body: string;
  type: "message";
}

export interface IGroupNotificationData {
  id: string;
  time: string;
  groupName: string;
  type: "groupJoin" | "groupExit";
}

export type TNotification =
  | IPostNotificationData
  | IGroupNotificationData
  | IMessageNotificationData;

export interface INotifsRecord extends IUserData {
  notification: TNotification;
}
