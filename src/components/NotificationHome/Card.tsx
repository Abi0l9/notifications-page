import { INotifsRecord } from "../../types";
import GroupCard from "./Cards/GroupCard";
import MessageCard from "./Cards/MessageCard";

type Props = {
  data: INotifsRecord;
};

const Card = ({ data }: Props) => {
  const { name, profileImg } = data;
  return (
    <div className="grid grid-cols-6 md:grid-cols-12  gap-x-2 min-h-[70px] bg-gray-200 rounded-md">
      <div className="col-span-1 flex flex-col justify-center items-center">
        <div className="bg-gray-100 h-[50px] w-[50px] rounded-full">
          {
            <img
              src={profileImg}
              alt={name.slice(0, 2)}
              className="h-[100%] w-full"
            />
          }
        </div>
      </div>
      <div className="col-span-5 text-base flex flex-col justify-center cursor-pointer">
        {data.notification.type === "groupJoin" ||
        data.notification.type === "groupExit" ? (
          <GroupCard
            key={data.notification.id}
            name={name}
            notification={data.notification}
          />
        ) : data.notification.type === "message" ? (
          <MessageCard
            key={data.notification.id}
            name={name}
            notification={data.notification}
          />
        ) : (
          `Toyin sent you a private message`
        )}
      </div>
    </div>
  );
};

export default Card;
