import { ContactCard } from "../components/ContactCard";
import { useChatContext } from "../contexts/chat-context";

export const ContactList = () => {
  const { readConversation } = useChatContext();

  return (
    <div className="lg:w-80">
      <h1 className="ml-4 mt-4 p-2 text-2xl">Chats</h1>

      <div className="flex flex-col gap-2 p-2">
        {readConversation.map((chat) => (
          <ContactCard key={chat.userId} chat={chat} />
        ))}
      </div>
    </div>
  );
};
