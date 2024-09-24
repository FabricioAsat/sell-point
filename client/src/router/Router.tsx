import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Library } from "../pages/Library";
import { AddItem } from "../pages/AddItem";
import { AddColl } from "../pages/AddColl";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col lg:flex-row">
          <Header />
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/additem" element={<AddItem />} />
            <Route path="/addcollection" element={<AddColl />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
