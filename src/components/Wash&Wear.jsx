import { Link } from "react-router-dom";

const HoverMenu = () => {
  return (
    <div className="relative inline-block group">
      {/* Menu Button */}
      <Link to="/category/wash-wear">
        <button className="hover:bg-[#8B4E12] hover:text-white px-6 py-2 rounded-full font-medium cursor-pointer">
          Wash & Wear
        </button>
      </Link>

      {/* Dropdown */}
      {/* <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <ul className="py-4 px-5 space-y-2 text-[#8B4E12] font-medium">
          <li className="hover:text-black cursor-pointer">Divine</li>
          <li className="hover:text-black cursor-pointer">Desire</li>
          <li className="hover:text-black cursor-pointer">Supreme</li>
          <li className="hover:text-black cursor-pointer">Four Seasons</li>
          <li className="hover:text-black cursor-pointer">
            Treasure Wrinkle Free
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default HoverMenu;
