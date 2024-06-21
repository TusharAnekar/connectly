import { ContactList } from "../components/ContactList";

export const Home = () => {
  return (
    <div className="lg:flex">
      <ContactList />
      <p className="hidden text-xl font-semibold italic text-blue-500 lg:m-auto lg:block">
        Please select contact to see chats here
      </p>
    </div>
  );
};
