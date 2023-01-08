import Layout from "./Components/Layout";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/Login";
import Quiz from "./Components/pages/Quiz";
import Result from "./Components/pages/Result";
import Signup from "./Components/pages/Signup";
import "./Components/styles/App.css";

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <Quiz /> */}
      <Result />
    </Layout>
  );
}

export default App;
