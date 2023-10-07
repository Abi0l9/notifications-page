import { useState } from "react";
import { IMessageNotificationData } from "../../../types";
import UnreadIcon from "../UnreadIcon";
import Wrapper from "./Wrapper";
import ContentWrapper from "./ContentWrapper";
import WithContentWrapper from "./WithContentWrapper";

type Props = {
  name: string;
  notification: IMessageNotificationData;
  updateCard: (id: string) => void;
  profileImg: JSX.Element;
};

const MessageCard = ({ name, notification, updateCard, profileImg }: Props) => {
  const [openMsg, setOpenMsg] = useState(false);

  const toggleMsgOpen = () => {
    setOpenMsg(!openMsg);
  };

  const messageBody = () => {
    return openMsg && <ContentWrapper content={notification.body} />;
  };

  return (
    <WithContentWrapper>
      <Wrapper clicked={notification.unread} profileImg={profileImg}>
        <div className="col-span-5 text-base flex flex-col justify-center cursor-pointer">
          <p
            className=""
            onClick={() => {
              updateCard(notification.id);
              toggleMsgOpen();
            }}
          >
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
      <div className="">{messageBody()}</div>
    </WithContentWrapper>
  );
};

export default MessageCard;
