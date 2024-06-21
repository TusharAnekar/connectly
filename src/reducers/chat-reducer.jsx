import { data } from "../db/chatData";

const initialChats = {
  originalChats: data,
  readChatsId: [],
};

const chatsReducer = (state, { type, payload }) => {
  switch (type) {
    case "DELETE_CONVERSATION":
      return {
        ...state,
        originalChats: state.originalChats.filter(
          ({ userId }) => userId !== payload,
        ),
      };
    case "MARK_AS_READ_CONVERSATION":
      return { ...state, readChatsId: [...state.readChatsId, payload] };
    case "MARK_AS_UNREAD_CONVERSATION":
      return {
        ...state,
        readChatsId: state.readChatsId.filter((userId) => userId !== payload),
      };
    default:
      return state;
  }
};

export { chatsReducer, initialChats };
