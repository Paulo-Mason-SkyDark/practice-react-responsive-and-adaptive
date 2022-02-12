import { data } from "./mock";
import Home from "./pages/Home/Home";
import Global from "./styles/global";

function App() {
  return (
    <>
    <Global />
    <Home boxData={data} />
    </>
  );
}

export default App;
