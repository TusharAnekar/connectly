import { createContext, useContext, useReducer } from "react";
import { chatsReducer, initialChats } from "../reducers/chat-reducer";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [chats, setChats] = useReducer(chatsReducer, initialChats);
  const { originalChats, readChatsId } = chats;

  const readConversation = readChatsId.length
    ? originalChats.map((chat) =>
        readChatsId.includes(chat.userId)
          ? { ...chat, unreadCount: 0 }
          : { ...chat, unreadCount: chat.unreadCount },
      )
    : originalChats;

  return (
    <ChatContext.Provider value={{ chats, setChats, readConversation }}>
      {children}
    </ChatContext.Provider>
  );
};

const useChatContext = () => useContext(ChatContext);

export { ChatProvider, useChatContext };
