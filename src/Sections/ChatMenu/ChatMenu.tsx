import Chatbox from "../../Components/Chatbox";
import { users } from "../../DummyData/chatusers.tsx";

function ChatMenu() {
  const chatArray = users.map((user: any, index: number) => (
    <div key={index}>
      <Chatbox user={user} />
    </div>
  ));

  return (
    <div className="p-2 max-h-full overflow-y-auto">
      {chatArray}
    </div>
  );
}

export default ChatMenu;
