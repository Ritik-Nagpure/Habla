import favicon from "/App/favicon.svg";
import profile from "/App/profile.svg";

import Search from "../Components/Search";

function Header() {
  return (
    <div className="flex flex-row rounded-md mx-2 bg-red-200 justify-between px-2">
      <div className="flex flex-row justify-start p-1">
        <img src={favicon} className="rounded-full sm:h-12 sm:w-12 h-10 w-10 m-auto" />
        
        <p className="text-xl sm:text-3xl ml-2 font-bold m-auto font-cursive text-cyan-500 ">
          Habla
        </p>
      </div>
      
      <div className="bg-gray-200 border-2 border-gray-400 rounded-full h-fit m-auto p-1">
          <Search/>
      </div>
      
      <div className="flex flex-row justify-end gap-2">
          <p className="my-auto">
            Settings
          </p>
          <img src={profile} className="rounded-full sm:h-12 sm:w-12 h-10 w-10 m-auto" />
      </div>
    </div>
  );
}

export default Header;
