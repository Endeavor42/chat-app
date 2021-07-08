import "./styles/app.scss";
import Chat from "./components/chat/Chat";
import Footer from "./components/chat/Footer";
import Header from "./components/chat/Header";
import Sidebar from "./components/sidebar/Sidebar";
import store from "./redux/store";
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
