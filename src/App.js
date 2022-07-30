import React from "react";
import Header from "./components/Header/Header";
import UserForm from "./components/Form/UserForm";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <UserForm />
      <Footer />
    </div>
  );
}

export default App;

