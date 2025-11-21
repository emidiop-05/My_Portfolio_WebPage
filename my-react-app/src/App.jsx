import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import MainPage from "./pages/Main";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />{" "}
        </Routes>
      </main>
    </>
  );
}
