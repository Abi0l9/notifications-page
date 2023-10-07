import { useState } from "react";
import { IPostNotificationData } from "../../../types";
import UnreadIcon from "../UnreadIcon";
import ContentWrapper from "./ContentWrapper";
import WithContentWrapper from "./WithContentWrapper";
import Wrapper from "./Wrapper";
import { Fade } from "react-awesome-reveal";

type Props = {
  name: string;
  notification: IPostNotificationData;
  updateCard: (id: string) => void;
  profileImg: JSX.Element;
};

const PostCard = (props: Props) => {
  const [openContent, setOpenContent] = useState(false);

  const toggleContentOpen = () => {
    setOpenContent(!openContent);
  };

  const message =
    props.notification.type === "postComment"
      ? "commented on your picture "
      : "reacted to your recent post ";

  const content = (
    <span className="font-semibold">
      {props.notification.type === "postReaction" &&
        typeof props.notification.content === "string" &&
        props.notification.content}
    </span>
  );

  const imageDiv = () => {
    const notification = props.notification;
    if (
      notification.type === "postComment" &&
      typeof notification.content === "object"
    ) {
      return (
        <div className="w-[50px] h-[50px] rounded-md border-1 border-gray-100 p-1">
          <img
            src={notification.content.picUrl}
            alt="dp"
            className="w-full h-[100%] object-cover rounded-md"
          />
        </div>
      );
    }
    return <></>;
  };

  const contentBody = () => {
    return (
      openContent &&
      props.notification.type === "postComment" && (
        <ContentWrapper content={props.notification.content} />
      )
    );
  };

  return (
    <WithContentWrapper>
      <Wrapper
        clicked={props.notification.unread}
        profileImg={props.profileImg}
      >
        <div className="col-span-5 text-base flex flex-col justify-center cursor-pointer">
          <div
            className="flex flex-row justify-between items-start w-full"
            onClick={() => {
              props.updateCard(props.notification.id);
              toggleContentOpen();
            }}
          >
            <div className="">
              <span className="font-semibold"> {props.name}</span>{" "}
              <span className="text-gray-700 text-sm">{message}</span>
              <span className="font-semibold"> {content}</span>{" "}
              {props.notification.unread && <UnreadIcon />}
              <p className="text-gray-500 text-xs">{props.notification.time}</p>
            </div>
            <Fade>{!openContent ? imageDiv() : ""}</Fade>
          </div>
        </div>
      </Wrapper>
      <div className="">{contentBody()}</div>
    </WithContentWrapper>
  );
};

export default PostCard;
