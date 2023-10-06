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
        />
      );
    } else if (data.notification.type === "message") {
      return (
        <MessageCard
          updateCard={updateCard}
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
          key={data.notification.id}
          name={name}
          notification={data.notification}
        />
      );
    } else return "You have a notification";
  };

  const img = (
    <img
      src={profileImg}
      alt={name.slice(0, 2)}
      className="h-[100%] w-full rounded-full object-cover"
    />
  );

  return (
    <div className="grid grid-cols-6 md:grid-cols-12  gap-x-2 min-h-[70px] bg-gray-200 rounded-md">
      <div className="col-span-1 flex flex-col justify-center items-center">
        <div className="bg-gray-100 h-[50px] w-[50px] rounded-full">{img}</div>
      </div>
      <div className="col-span-5 text-base flex flex-col justify-center cursor-pointer">
        {card()}
      </div>
    </div>
  );
};

export default Card;
