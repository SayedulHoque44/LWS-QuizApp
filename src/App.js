import Layout from "./Components/Layout";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/Login";
import Signup from "./Components/pages/Signup";
import "./Components/styles/App.css";

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <Signup /> */}
      <Login />
    </Layout>
  );
}

export default App;
