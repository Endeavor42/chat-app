import "../styles/app.scss";
import Chat from "./Chat";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="body">
        <Header />
        <Chat />
        <Footer />
      </div>
    </div>
  );
}

export default App;
