import { CommentBody } from "../../../types";
import { Fade } from "react-awesome-reveal";

type Props = {
  content: string | CommentBody;
};

const ContentWrapper = ({ content }: Props) => {
  const commentTypeContent = () => {
    if (typeof content === "object") {
      const body = (
        <div className="flex flex-col w-full h-[150px] gap-y-2">
          <div className="w-full rounded-md h-[80%]">
            <img
              src={content.picUrl}
              alt="commented item"
              className="object-cover w-[100%] h-[100%] rounded-md"
            />
          </div>
          <div className="text-xs cursor-pointer">{content.message}</div>
        </div>
      );

      return body;
    } else return <div className="text-xs cursor-pointer">{content}</div>;
  };

  const body = (
    <div className="grid grid-cols-6 md:grid-cols-12  gap-x-2 my-1">
      <div className="col-span-1 md:col-span-2"></div>
      <div className="col-span-5 md:col-span-10 mx-1">
        <div className="text-xs  p-3 bg-gray-100 hover:bg-blue-100 rounded-md border border-[0.5px] border-gray-300">
          <Fade>{commentTypeContent()}</Fade>
        </div>
      </div>
    </div>
  );

  return body;
};

export default ContentWrapper;
