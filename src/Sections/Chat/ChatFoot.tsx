import send from "/Icons/send.svg";

function sendMessage(){
  return (
    <div className="flex flex-row gap-2 m-auto px-2">
      <input type="text" placeholder="Click to Write Message" className="rounded-full border border-2 border-gray-600 text-center flex-grow"/>
      <img src={send} className="h-8 w-8 transform -rotate-40"/>
    </div>
  );
};

export default sendMessage;
