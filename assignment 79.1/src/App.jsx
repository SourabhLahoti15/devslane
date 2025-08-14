import Navbar from "./Navbar";
import HomePage from "./HomePage";
import ProductDetails from "./ProductDetails";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Login_withFormik from "./Login_withFormik";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";
import Alert from "./Alert";

function App() {

  return (
    <div className="flex items-center justify-center w-full">
      <Alert />
      <Navbar></Navbar>
      <Routes>
        <Route index element={<UserRoute><HomePage /></UserRoute>}></Route>
        <Route
          path="/products/:id"
          element={<UserRoute><ProductDetails/></UserRoute>}
        ></Route>
        <Route path="/cart" element={<UserRoute><Cart/></UserRoute>}></Route>
        <Route path="/signup" element={<AuthRoute><Signup /></AuthRoute>}></Route>
        <Route path="/login" element={<AuthRoute><Login_withFormik /></AuthRoute>}></Route>
        <Route path="/forgetpassword" element={<AuthRoute><ForgetPassword /></AuthRoute>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
