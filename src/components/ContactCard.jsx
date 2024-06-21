import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChatContext } from "../contexts/chat-context";

export const ContactCard = ({ chat }) => {
  const { userId, name, unreadCount, profilePictureURL } = chat;
  console.log(chat.chat[chat.chat.length - 1].you.message);

  const [isShowModal, setIsShowModal] = useState(false);

  const { setChats } = useChatContext();

  const navigate = useNavigate();

  function handleContact() {
    navigate(`/contact/${userId}`);
    setChats({ type: "MARK_AS_READ_CONVERSATION", payload: userId });
  }

  function handleMore() {
    setIsShowModal((prev) => !prev);
  }

  function handleDelete() {
    setChats({ type: "DELETE_CONVERSATION", payload: userId });
    navigate("/");
  }

  function handleMarkAsRead() {
    setChats({ type: "MARK_AS_READ_CONVERSATION", payload: userId });
  }

  function handleMarkAsUnread() {
    setChats({ type: "MARK_AS_UNREAD_CONVERSATION", payload: userId });
  }

  return (
    <div className="relative">
      <div className="flex justify-between">
        <div
          className="flex w-full cursor-pointer justify-between p-2"
          onClick={handleContact}
        >
          <div className="flex gap-1">
            <img
              src={profilePictureURL}
              alt={name}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="text-base font-bold">{name}</p>
              <p className="w-1/3 truncate text-gray-400">
                {chat.chat[chat.chat.length - 1].you.message}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col justify-between">
              <p className="text-sm text-gray-400">11/19/19</p>
              {!!unreadCount && (
                <p className="ms-8 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  {unreadCount}
                </p>
              )}
            </div>
          </div>
        </div>
        <MoreVertIcon
          color="primary"
          className="m-auto cursor-pointer"
          onClick={handleMore}
        />
      </div>
      {isShowModal && (
        <div className="absolute right-4 top-12 z-10 flex w-40 flex-col gap-2 rounded-lg border border-black bg-white p-2">
          {unreadCount ? (
            <button onClick={handleMarkAsRead}>Mark as read</button>
          ) : (
            <button onClick={handleMarkAsUnread}>Mark as unread</button>
          )}
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleMore}>Cancel</button>
        </div>
      )}
    </div>
  );
};
