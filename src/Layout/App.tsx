import ChatDisplay from "../Sections/Chat/ChatDisplay";
import ChatMenu from "../Sections/ChatMenu/ChatMenu";

function App() {
  // const [selectedItem, setSelectedItem] = useState(null);

  // const handleItemClick = (item) => {
  //   setSelectedItem(item);
  // };

  // const handleBackClick = () => {
  //   setSelectedItem(null);
  // };

  return (
    <div className="grid sm:grid-cols-3 gap-1 h-full">
      <div className="sm:col-span-1 overflow-auto bg-gray-300 rounded-md  md:visible">
        <ChatMenu />
      </div>
      <div className="sm:col-span-2 overflow-auto bg-gray-300 rounded-md  sm:block">
        <ChatDisplay />
      </div>
    </div>

    // <div>
    //   {!selectedItem && <ChatMenu items={leftItems} onItemClick={handleItemClick} />}
    //   {selectedItem && <ChatDisplay selectedItem={selectedItem} onBackClick={handleBackClick} />}

    //   <div className="grid sm:grid-cols-3 gap-1 h-full">
    //     <div className="sm:col-span-1 overflow-auto bg-gray-300 rounded-md md:visible" onClick={selectedChat()}>
    //       <ChatMenu />
    //     </div>
    //     <div className="sm:col-span-2 overflow-auto bg-gray-300 rounded-md hidden sm:block">
    //       <ChatDisplay />
    //     </div>
    //   </div>
    // </div>
  );
}

function selectedChat() {

}

export default App;
