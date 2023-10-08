type Props = {
  children: JSX.Element;
  clicked: boolean;
  profileImg: JSX.Element;
};

const Wrapper = ({ children, clicked, profileImg }: Props) => {
  return (
    <div
      className={`grid grid-cols-6 md:grid-cols-12 px-1 gap-x-2 min-h-[70px]   ${
        !clicked ? "bg-blue-100 " : "bg-gray-200 hover:bg-gray-100"
      } rounded-md`}
    >
      <div className="col-span-1 md:col-span-2 flex flex-col justify-center items-center">
        <div className="bg-gray-100 h-[50px] w-[50px] rounded-full">
          {profileImg}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Wrapper;
