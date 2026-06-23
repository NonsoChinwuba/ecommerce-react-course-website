import { Link, Route, Routes } from "react-router-dom";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function App() {
  // const name = "Harry";

  // for navigation via button click
  // const navigate = useNavigate();

  return (
    <div>
      <Routes>
        {/* ecommerce routes */}
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
