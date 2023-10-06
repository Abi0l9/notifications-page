import { IMessageNotificationData } from "../../../types";
import UnreadIcon from "../UnreadIcon";
import Wrapper from "./Wrapper";

type Props = {
  name: string;
  notification: IMessageNotificationData;
  updateCard: (id: string) => void;
  profileImg: JSX.Element;
};

const MessageCard = ({ name, notification, updateCard, profileImg }: Props) => {
  return (
    <Wrapper clicked={notification.unread}>
      <div className="col-span-1 flex flex-col justify-center items-center">
        <div className="bg-gray-100 h-[50px] w-[50px] rounded-full">
          {profileImg}
        </div>
      </div>
      <div className="col-span-5 text-base flex flex-col justify-center cursor-pointer">
        <p className="" onClick={() => updateCard(notification.id)}>
          {" "}
          <span className="font-semibold"> {name}</span>{" "}
          <span className="text-gray-700 text-sm">
            sent you a private message
          </span>{" "}
          {notification.unread && <UnreadIcon />}
        </p>
        <p className="text-gray-500 text-xs">{notification.time}</p>
      </div>
    </Wrapper>
  );
};

export default MessageCard;
