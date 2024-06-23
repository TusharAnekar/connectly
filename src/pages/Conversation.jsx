import { ContactList } from "../components/ContactList";
import { ConverstaionDetails } from "../components/ConversationDetails";

export const Conversation = () => {
  return (
    <div className="min-h-dvh lg:relative lg:flex">
      <div className="hidden lg:sticky lg:left-0 lg:top-0 lg:block">
        <ContactList />
      </div>
      <ConverstaionDetails />
    </div>
  );
};
