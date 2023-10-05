import { IMessageNotificationData } from "../../../types";

type Props = {
  name: string;
  notification: IMessageNotificationData;
};

const MessageCard = ({ name, notification }: Props) => {
  return (
    <div className="">
      <p className="">{`${name} sent you a private message`}</p>
      <p className="">{notification.time}</p>
    </div>
  );
};

export default MessageCard;
