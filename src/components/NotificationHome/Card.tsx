const Card = () => {
  return (
    <div className="grid grid-cols-6 md:grid-cols-12  gap-x-2 min-h-[70px] bg-gray-200 rounded-md">
      <div className="col-span-1 flex flex-col justify-center items-center">
        <div className="bg-gray-100 h-[50px] w-[50px] rounded-full"></div>
      </div>
      <div className="col-span-5 text-base flex flex-col justify-center cursor-pointer">
        Toyin sent you a private message
      </div>
    </div>
  );
};

export default Card;
