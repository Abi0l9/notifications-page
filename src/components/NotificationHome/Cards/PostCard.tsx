import { IPostNotificationData } from "../../../types";
import UnreadIcon from "../UnreadIcon";

type Props = {
  name: string;
  notification: IPostNotificationData;
  updateCard: (id: string) => void;
};

const PostCard = (props: Props) => {
  const message =
    props.notification.type === "postComment"
      ? "commented on your picture "
      : "reacted to your recent post ";

  const content = (
    <span className="font-semibold">
      {props.notification.type === "postReaction" && props.notification.content}
    </span>
  );

  return (
    <div className="">
      <p className="" onClick={() => props.updateCard(props.notification.id)}>
        <span className="font-semibold"> {props.name}</span>{" "}
        <span className="text-gray-900 text-sm">{message}</span>
        <span className="font-semibold"> {content}</span>{" "}
        {props.notification.unread && <UnreadIcon />}
      </p>
      <p className="">{props.notification.time}</p>
    </div>
  );
};

export default PostCard;
