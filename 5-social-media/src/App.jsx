import Footer from "./components/footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar";
import "./App.css";

function App() {
  return (
    <div className="div-container ">
      <Sidebar />
      <div className="content">
        <Header />
        <Footer />
      </div>
    </div>
  );
}
export default App;
