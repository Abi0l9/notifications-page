import { IGroupNotificationData } from "../../../types";

type Props = {
  name: string;
  notification: IGroupNotificationData;
};

const GroupCard = (props: Props) => {
  const message =
    props.notification.type === "groupJoin"
      ? "joined your group"
      : "exited your group";

  return (
    <div className="">
      <p className="">
        {`${props.name} ${message} ${props.notification.groupName}`}
      </p>
      <p className="">{props.notification.time}</p>
    </div>
  );
};

export default GroupCard;
