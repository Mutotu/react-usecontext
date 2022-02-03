import "./App.css";
import { useContext } from "react";
import { VisitorContext } from "./context/VisitorContext";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const value = useContext(VisitorContext);

  return (
    <div className='App'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
