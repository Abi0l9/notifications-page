import { IMessageNotificationData } from "../../../types";
import UnreadIcon from "../UnreadIcon";

type Props = {
  name: string;
  notification: IMessageNotificationData;
  updateCard: (id: string) => void;
};

const MessageCard = ({ name, notification, updateCard }: Props) => {
  return (
    <div className="">
      <p className="" onClick={() => updateCard(notification.id)}>
        {" "}
        <span className="font-semibold"> {name}</span>{" "}
        <span className="text-gray-600 text-sm">
          sent you a private message
        </span>{" "}
        {notification.unread && <UnreadIcon />}
      </p>
      <p className="">{notification.time}</p>
    </div>
  );
};

export default MessageCard;
