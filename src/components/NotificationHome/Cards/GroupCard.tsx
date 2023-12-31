import { IGroupNotificationData } from "../../../types";
import UnreadIcon from "../UnreadIcon";
import Wrapper from "./Wrapper";

type Props = {
  name: string;
  notification: IGroupNotificationData;
  updateCard: (id: string) => void;
  profileImg: JSX.Element;
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
    <Wrapper clicked={props.notification.unread} profileImg={props.profileImg}>
      <div className="col-span-5 md:col-span-10 text-base flex flex-col justify-center cursor-pointer">
        <p onClick={() => props.updateCard(props.notification.id)} className="">
          <span className="font-semibold"> {props.name}</span>{" "}
          <span className="text-gray-700 text-sm">{message}</span>
          <span className="font-semibold"> {groupName}</span>{" "}
          {props.notification.unread && <UnreadIcon />}
        </p>
        <p className="text-gray-500 text-xs">{props.notification.time}</p>
      </div>
    </Wrapper>
  );
};

export default GroupCard;
