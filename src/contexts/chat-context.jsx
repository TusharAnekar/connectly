import { createContext, useContext, useReducer } from "react";
import { chatsReducer, initialChats } from "../reducers/chat-reducer";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [chats, setChats] = useReducer(chatsReducer, initialChats);

  return (
    <ChatContext.Provider value={{ chats, setChats }}>
      {children}
    </ChatContext.Provider>
  );
};

const useChatContext = () => useContext(ChatContext);

export { ChatProvider, useChatContext };
