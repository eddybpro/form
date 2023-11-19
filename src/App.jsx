import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Info from "./components/pages/Info";
import Plan from "./components/pages/Plan";
import AddOns from "./components/pages/AddOns";
import Summary from "./components/pages/Summary";
import Thank from "./components/pages/Thank";
import NoPage from "./components/pages/NoPage";
import { useState } from "react";

function App() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [state, setState] = useState({ name: "", price: "", yearly: false });
  const [add, setAdd] = useState([]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route index element={<Info />} />
          <Route
            path="plan"
            element={<Plan setIsMonthly={setIsMonthly} setState={setState} />}
          />
          <Route
            path="addons"
            element={<AddOns isMonthly={isMonthly} setAdd={setAdd} />}
          />
          <Route
            path="summary"
            element={<Summary state={state} add={add} setAdd={setAdd} />}
          />
          <Route path="thank" element={<Thank />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
