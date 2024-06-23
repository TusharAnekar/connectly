import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Conversation } from "./pages/Conversation";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact/:userId" element={<Conversation />}></Route>
      </Routes>
    </div>
  );
}

export default App;
