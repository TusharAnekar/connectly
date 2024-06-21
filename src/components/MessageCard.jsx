export const MessageCard = ({ chatMessage }) => {
  let genericChatMessage = {};

  for (const [key, value] of Object.entries(chatMessage)) {
    const messageReply = {};
    if (key.includes("user")) {
      messageReply["user"] = value;
      genericChatMessage = { ...genericChatMessage, ...messageReply };
    } else {
      messageReply[key] = value;
      genericChatMessage = { ...genericChatMessage, ...messageReply };
    }
  }

  const { user, you } = genericChatMessage;

  return (
    <div className="flex flex-col gap-2">
      <div className="ml-auto mr-0 w-64 rounded-3xl bg-green-200 p-4">
        <p>{user.message}</p>
        <p className="mt-2 text-right text-xs text-gray-400">
          {user.timeStamp}
        </p>
      </div>

      <div className="w-60 rounded-3xl bg-gray-200 p-4">
        <p>{you.message}</p>
        <p className="mt-2 text-xs text-gray-400">{you.timeStamp}</p>
      </div>
    </div>
  );
};
