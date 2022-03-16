import { FaPizzaSlice, FaHamburger, FaFileImport } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <nav className="flex justify-center m-8">
      <NavLink
        to={"/cuisine/Italian"}
        className={({ isActive }) =>
          isActive
            ? "flex flex-col items-center justify-center rounded-full mr-8 w-20 h-20 cursor-pointer bg-gradient-to-r from-[#f27121] to-[#e94057]"
            : "flex flex-col items-center justify-center rounded-full mr-8 w-20 h-20 cursor-pointer bg-gradient-to-r from-[#494949] to-[#313131]"
        }
      >
        <FaPizzaSlice className="fill-white text-xl" />
        <h4 className="text-xs font-normal text-white">Italian</h4>
      </NavLink>
      <NavLink
        to={"/cuisine/American"}
        className={({ isActive }) =>
          isActive
            ? "flex flex-col items-center justify-center rounded-full mr-8 w-20 h-20 cursor-pointer bg-gradient-to-r from-[#f27121] to-[#e94057]"
            : "flex flex-col items-center justify-center rounded-full mr-8 w-20 h-20 cursor-pointer bg-gradient-to-r from-[#494949] to-[#313131]"
        }
      >
        <FaHamburger className="fill-white text-xl" />
        <h4 className="text-xs font-normal text-white">American</h4>
      </NavLink>
      <NavLink
        to={"/cuisine/Thai"}
        className={({ isActive }) =>
          isActive
            ? "flex flex-col items-center justify-center rounded-full mr-8 w-20 h-20 cursor-pointer bg-gradient-to-r from-[#f27121] to-[#e94057]"
            : "flex flex-col items-center justify-center rounded-full mr-8 w-20 h-20 cursor-pointer bg-gradient-to-r from-[#494949] to-[#313131]"
        }
      >
        <GiNoodles className="fill-white text-xl" />
        <h4 className="text-xs font-normal text-white">Thai</h4>
      </NavLink>
      <NavLink
        to={"/cuisine/Japanese"}
        className={({ isActive }) =>
          isActive
            ? "flex flex-col items-center justify-center rounded-full mr-8 w-20 h-20 cursor-pointer bg-gradient-to-r from-[#f27121] to-[#e94057]"
            : "flex flex-col items-center justify-center rounded-full mr-8 w-20 h-20 cursor-pointer bg-gradient-to-r from-[#494949] to-[#313131]"
        }
      >
        <GiChopsticks className="fill-white text-xl" />
        <h4 className="text-xs font-normal text-white">Japanese</h4>
      </NavLink>
    </nav>
  );
}

export default Category;
