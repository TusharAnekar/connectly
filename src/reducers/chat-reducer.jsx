import { data } from "../db/chatData";

const initialChats = {
  originalChats: data,
};

const chatsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_CHATS":
      return { ...state, originalChats: payload };

    default:
      return state;
  }
};

export { chatsReducer, initialChats };
