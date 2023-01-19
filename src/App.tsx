import React from 'react';
import {BrowserRouter} from "react-router-dom";
import MainComponent from "./components/mainComponent/mainComponent";


function App() {
  return (
      <BrowserRouter>
        <MainComponent/>
      </BrowserRouter>

  );
}

export default App;
