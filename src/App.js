import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar title="TextEditor" active="active" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              
              element={
                <TextForm
                  showAlert={showAlert}
                  
                  heading="Enter the text to analyze the below "
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
