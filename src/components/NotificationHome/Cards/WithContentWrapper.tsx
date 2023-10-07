type Props = {
  children: JSX.Element[];
};

const WithContentWrapper = ({ children }: Props) => {
  return (
    <div className={`flex flex-col bg-blue-100 rounded-md`}>{children}</div>
  );
};

export default WithContentWrapper;
