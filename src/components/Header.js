import { useContext } from "react";
import { VisitorContext } from "../context/VisitorContext";

const Header = () => {
  const { visitorState, countState } = useContext(VisitorContext);

  const [visitor] = visitorState;
  const [count, setCount] = countState;

  return (
    <div className='header'>
      <h2>Header Component</h2>
      <h2>Hello, {visitor}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Header;
