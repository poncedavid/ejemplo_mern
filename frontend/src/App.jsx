import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home";
import  Create  from "./pages/Create";
import  Details  from "./pages/Details";
import  Edit  from "./pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets/new" element={<Create />} />
        <Route path="/pets/:id" element={<Details />} />
        <Route path="/pets/:id/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
