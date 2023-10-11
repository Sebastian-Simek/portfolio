import "./app.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <div>
        <Header />
        <Home classname="home" />
        <Footer />
      </div>
    </>
  );
}

export default App;
