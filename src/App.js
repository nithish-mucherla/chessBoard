import React, { useState } from 'react';
import './App.css';
import Button from './containers/Button/Button';
function App() {

    const [color, setcolor] = useState("black");
    return (
      <Button buttonColor={color}/>
    );
}

export default App;
