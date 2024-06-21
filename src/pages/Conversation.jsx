import { ContactList } from "../components/ContactList";
import { ConverstaionDetails } from "../components/ConversationDetails";

export const Conversation = () => {
  return (
    <div className="lg:flex">
      <div className="hidden lg:block">
        <ContactList />
      </div>
      <ConverstaionDetails />
    </div>
  );
};
