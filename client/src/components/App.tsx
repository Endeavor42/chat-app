import "../styles/app.scss";
import Chat from "./Chat";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import store from "../store";
import { Provider } from "react-redux";

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

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
