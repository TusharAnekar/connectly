import { useNavigate, useParams } from "react-router-dom";

import { useChatContext } from "../contexts/chat-context";

import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import MicNoneRoundedIcon from "@mui/icons-material/MicNoneRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

import { MessageCard } from "../components/MessageCard";

export const ConverstaionDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { readConversation } = useChatContext();

  const user = readConversation.find((user) => user.userId === userId);
  const { name, profilePictureURL, chat } = user;

  function handleBack() {
    navigate("/");
  }

  return (
    <div className="relative lg:w-full lg:p-7">
      <div className="flex justify-between bg-gray-200 p-4 lg:rounded-lg">
        <div className="flex items-center justify-center gap-2">
          <ArrowBackIosNewRoundedIcon
            className="cursor-pointer"
            onClick={handleBack}
          />
          <img
            src={profilePictureURL}
            alt={name}
            className="h-10 w-10 rounded-full"
          />

          <div>
            <div className="flex items-end gap-2">
              <strong>{name}</strong>
              <div className="h-2 w-2 items-start rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm">Click here for contact info</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <VideocamOutlinedIcon color="primary" />
          <LocalPhoneOutlinedIcon color="primary" />
          <MoreVertIcon color="primary" />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 p-6">
        {chat.map((chatMessage, index) => (
          <MessageCard key={index} chatMessage={chatMessage} />
        ))}
      </div>

      <div className="border-red sticky bottom-0 flex w-full items-center justify-center gap-2 bg-white p-2">
        <ControlPointRoundedIcon className="text-gray-300" />

        <MicNoneRoundedIcon className="rounded-full border text-gray-300" />
        <div className="w-full">
          <input
            type="text"
            placeholder={`Message ${name}`}
            className="w-full rounded-full border p-2"
          />
          <SendRoundedIcon className="-m-8 text-gray-300" />
        </div>
      </div>
    </div>
  );
};
