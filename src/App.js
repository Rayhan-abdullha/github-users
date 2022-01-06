import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AlertContext } from "./components/ContextGithubFinder/Alert/AlertContext";
import { ContextProvider } from "./components/ContextGithubFinder/ContextProvider";
import Alert from "./components/layout/Alert";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <ContextProvider>
      <AlertContext>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertContext>
    </ContextProvider>
  );
};

export default App;
