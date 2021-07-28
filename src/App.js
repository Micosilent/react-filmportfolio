import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <ScrollToTop />{" "}
      {/* this component scrolls the page back to the top when
      you change routes*/}
      <Nav />
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact>
                  <AboutUs />
                </Route>
                <Route path="/work" exact>
                  <OurWork />
                </Route>
                <Route path="/work/:id">
                  <MovieDetail />
                </Route>
                <Route path="/contact">
                  <ContactUs />
                </Route>
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
