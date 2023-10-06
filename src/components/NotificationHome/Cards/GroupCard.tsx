import { IGroupNotificationData } from "../../../types";
import UnreadIcon from "../UnreadIcon";

type Props = {
  name: string;
  notification: IGroupNotificationData;
  updateCard: (id: string) => void;
};

const GroupCard = (props: Props) => {
  const message =
    props.notification.type === "groupJoin"
      ? "joined your group"
      : "left your group";

  const groupName = (
    <span className="font-semibold">{props.notification.groupName}</span>
  );

  return (
    <div className="">
      <p onClick={() => props.updateCard(props.notification.id)} className="">
        <span className="font-semibold"> {props.name}</span>{" "}
        <span className="text-gray-900 text-sm">{message}</span>
        <span className="font-semibold"> {groupName}</span>{" "}
        {props.notification.unread && <UnreadIcon />}
      </p>
      <p className="">{props.notification.time}</p>
    </div>
  );
};

export default GroupCard;
