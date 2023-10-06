import { markRead } from "../../services/notifs";
import { INotifsRecord } from "../../types";
import GroupCard from "./Cards/GroupCard";
import MessageCard from "./Cards/MessageCard";
import PostCard from "./Cards/PostCard";

type Props = {
  data: INotifsRecord;
  update: (data: INotifsRecord[]) => void;
};

const Card = ({ data, update }: Props) => {
  const { name, profileImg } = data;

  const updateCard = (id: string) => {
    const newData = markRead(id);
    update(newData);
  };

  const img = (
    <img
      src={profileImg}
      alt={name.slice(0, 2)}
      className="h-[100%] w-full rounded-full object-cover"
    />
  );

  const card = () => {
    if (
      data.notification.type === "groupJoin" ||
      data.notification.type === "groupExit"
    ) {
      return (
        <GroupCard
          updateCard={updateCard}
          key={data.notification.id}
          name={name}
          notification={data.notification}
          profileImg={img}
        />
      );
    } else if (data.notification.type === "message") {
      return (
        <MessageCard
          updateCard={updateCard}
          profileImg={img}
          key={data.notification.id}
          name={name}
          notification={data.notification}
        />
      );
    } else if (
      data.notification.type === "postComment" ||
      data.notification.type === "postReaction"
    ) {
      return (
        <PostCard
          updateCard={updateCard}
          profileImg={img}
          key={data.notification.id}
          name={name}
          notification={data.notification}
        />
      );
    } else return "You have a notification";
  };

  return <>{card()}</>;
};

export default Card;
