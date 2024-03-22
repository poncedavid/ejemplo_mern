import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { CreatePage } from "./pages/CreatePage/CreatePage";
import { DetailsPage } from "./pages/DetailsPage/DetailsPage";
import { EditPage } from "./pages/EditPage/EditPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/pets/new" element={<CreatePage></CreatePage>}></Route>
          <Route path="/pets/:id" element={<DetailsPage></DetailsPage>}></Route>
          <Route path="/pets/:id/edit" element={<EditPage></EditPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
