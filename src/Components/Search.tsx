import search from "/Icons/send.svg";

function Search(){
  return (
    <div className="flex flex-row m-auto">
      <input type="text" placeholder="Search" className="rounded-full border border-2 border-gray-600 text-center w-24 sm:w-96"/>
      <img src={search} className="h-8 w-8"/>
    </div>
  );
};

export default Search;
