import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Blog from "./routes/Blog";
import Gallary from "./routes/Gallary";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import LoginForm from "./routes/LoginForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/loginform" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
