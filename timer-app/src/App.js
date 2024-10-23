import React from "react";
import "./App.css";
import Analog from "./pages/analog";
import Digital from "./pages/digital";
import NoPage from "./pages/nopage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Analog />} />
            <Route path="/analog" element={<Analog />} />
            <Route path="/digital" element={<Digital />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
