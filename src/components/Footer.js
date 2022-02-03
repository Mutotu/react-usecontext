import { VisitorContext } from "../context/VisitorContext";
import { useContext, useEffect } from "react";

const Footer = () => {
  const { countState, visitorState } = useContext(VisitorContext);
  const [count, setCount] = countState;
  const [visitor, setVisitor] = visitorState;
  //if visitor changes setCount(0)
  const changedName = () => {
    setCount(0);
  };

  useEffect(() => {
    changedName();
  }, [visitor]);
  return (
    <div className='footer'>
      <h2>Footer Component</h2>
      <h2>
        You have {count} {count > 1 ? "items" : "item"} in your shoppinng list
      </h2>
    </div>
  );
};

export default Footer;
