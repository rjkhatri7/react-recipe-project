import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <nav className="py-12 flex justify-start items-center">
      <GiKnifeFork className="text-2xl m-2" />
      <Link
        to={"/"}
        className="no-underline text-2xl font-normal font-['Lobster_Two',_cursive]"
      >
        deliciousss
      </Link>
    </nav>
  );
}

export default Logo;
