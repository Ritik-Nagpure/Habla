import ChatDisplay from "../Sections/Chat/ChatDisplay";
import ChatMenu from "../Sections/ChatMenu/ChatMenu";

function App() {
  return (
    <div className="grid sm:grid-cols-3 gap-1 h-full">
      <div className="sm:col-span-1 overflow-auto bg-gray-300 rounded-md">
        <ChatMenu />
      </div>
      <div className="sm:col-span-2 bg-gray-300 rounded-md ">
        <ChatDisplay />
      </div>
    </div>
  );
}

export default App;
