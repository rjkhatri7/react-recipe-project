import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Pages from "./pages/Pages";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
