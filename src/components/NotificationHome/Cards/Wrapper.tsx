type Props = {
  children: JSX.Element[];
  clicked: boolean;
};

const Wrapper = ({ children, clicked }: Props) => {
  return (
    <div
      className={`grid grid-cols-6 md:grid-cols-12  gap-x-2 min-h-[70px] bg-gray-200 hover:bg-gray-300 ${
        !clicked && "bg-blue-100 hover:bg-gray-100"
      } rounded-md`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
