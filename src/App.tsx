// import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListCategory from "./components/Home/ListCategory";

// import { Login } from "./components/Login/Login";
// import { Register } from "./components/Register/Register";
// import { Home } from "./components/Home/Home";

import { Provider } from "./components/Provider";

function App() {
  return (
    <Provider>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes> */}
      <ListCategory />
    </Provider>
  );
}

export default App;
