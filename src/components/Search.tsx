import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <form className="mx-52" onSubmit={submitHandler}>
      <div className="relative w-full">
        <FaSearch className="absolute top-1/2 left-0 translate-x-full -translate-y-1/2 fill-white" />
        <input
          className="border-none text-xl w-full text-white px-12 py-3 rounded-2xl outline-none bg-gradient-to-r from-[#494949] to-[#313131]"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;
