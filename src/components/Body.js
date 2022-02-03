import { useContext } from "react";
import { VisitorContext } from "../context/VisitorContext";

const Body = () => {
  const { visitorState, entryState } = useContext(VisitorContext);
  const [visitor, setVisitor] = visitorState;
  const [entry, setEntry] = entryState;

  return (
    <div className='body'>
      <h2>Body Component</h2>
      <input
        onChange={(e) => {
          setEntry(e.target.value);
        }}
        value={entry}
        placeholder='Your name?'
      />
      <button
        onClick={() => {
          setVisitor(entry);
        }}
      >
        Enter
      </button>
    </div>
  );
};

export default Body;
