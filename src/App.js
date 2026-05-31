import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieGrid />
      <Footer />
    </div>
  );
}

export default App;
