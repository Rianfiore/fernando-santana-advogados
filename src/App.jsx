import "./App.css";
import { NavBar } from "./components/navBar";
import { Main } from "./pages/main";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
