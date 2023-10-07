type Props = {
  total: number;
  markAll: () => void;
  readAll: boolean;
};

const Header = ({ total, markAll, readAll }: Props) => {
  const text = !readAll ? "read" : "unread";

  return (
    <div className="flex flex-row w-full justify-between items-center">
      <div className="flex flex-row gap-x-2  items-center">
        <div className="font-semibold text-2xl">
          <a href="" className="">
            Notifications
          </a>
        </div>
        <div className="bg-blue-900 text-gray-100 p-3 text-sm py-[1px] rounded-md">
          {total}
        </div>
      </div>
      <p
        onClick={markAll}
        className="text-gray-500 text-xs active:text-gray-900 hover:text-black cursor-pointer"
      >
        Mark all as {text}
      </p>
    </div>
  );
};

export default Header;
