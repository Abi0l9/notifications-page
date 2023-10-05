interface IUserData {
  name: string;
  profileImg: string;
}

interface INotificationData {
  time: string;
  content: string;
}

interface IPostReactNotificationData extends INotificationData {
  type: "postReaction";
}

interface IPostCommentNotificationData extends INotificationData {
  type: "postComment";
}

interface IMessageNotificationData extends INotificationData {
  type: "message";
}

interface IGroupNotificationData {
  time: string;
  groupName: string;
}

interface IGroupJoin extends IGroupNotificationData {
  type: "groupJoin";
}

interface IGroupExit extends IGroupNotificationData {
  type: "groupExit";
}

// type NotificationType =
//   | "postReaction"
//   | "message"
//   | "postComment"
//   | "groupJoin"
//   | "groupExit";

type TNotification =
  | IPostReactNotificationData
  | IPostCommentNotificationData
  | IMessageNotificationData
  | IGroupJoin
  | IGroupExit;

export interface INotifsRecord extends IUserData {
  notification: TNotification;
}
