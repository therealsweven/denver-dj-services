import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Auth from "./utils/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import { useEffect } from "react";
import { themeChange } from "theme-change";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  const type = localStorage.getItem("profType");
  const entity = localStorage.getItem("profEntity");
  console.log(type, entity);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      activeProfileType: type,
      activeProfileEntity: entity,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <ApolloProvider client={client}>
      <Router>
        <html data-theme="mytheme"></html>
        <NavBar />
        <select className="rounded text-xl" data-choose-theme>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="retro">Retro</option>
          <option value="bumblebee">Bumblebee</option>
          <option value="synthwave">Synthwave</option>
          <option value="cyberpunk">Cyberpunk</option>
          <option value="valentine">Valentine</option>
          <option value="garden">Garden</option>
          <option value="pastel">Pastel</option>
          <option value="luxury">Luxury</option>
          <option value="autumn">Autumn</option>
          <option value="mytheme">My Theme</option>
        </select>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
