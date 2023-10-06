import { IPostNotificationData } from "../../../types";
import UnreadIcon from "../UnreadIcon";
import Wrapper from "./Wrapper";

type Props = {
  name: string;
  notification: IPostNotificationData;
  updateCard: (id: string) => void;
  profileImg: JSX.Element;
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
    <Wrapper clicked={props.notification.unread}>
      <div className="col-span-1 flex flex-col justify-center items-center">
        <div className="bg-gray-100 h-[50px] w-[50px] rounded-full">
          {props.profileImg}
        </div>
      </div>
      <div className="col-span-5 text-base flex flex-col justify-center cursor-pointer">
        <p className="" onClick={() => props.updateCard(props.notification.id)}>
          <span className="font-semibold"> {props.name}</span>{" "}
          <span className="text-gray-700 text-sm">{message}</span>
          <span className="font-semibold"> {content}</span>{" "}
          {props.notification.unread && <UnreadIcon />}
        </p>
        <p className="text-gray-500 text-xs">{props.notification.time}</p>
      </div>
    </Wrapper>
  );
};

export default PostCard;
