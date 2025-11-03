// src/App.jsx

import './App.css';
import Button1 from './components/example-1-normal-css/Button';
import Button2 from './components/example-1-normal-css/Button';
import Button3 from './components/example-1-normal-css/Button';
import Button4 from './components/example-1-normal-css/Button';
import Button5 from './components/example-1-normal-css/Button';

function App() {
  return (
    <div className="App">
      <Button1 buttonText="Example 1" />
      <Button2 buttonText="Example 2" />
      <Button3 buttonText="Example 3" />
      <Button4 buttonText="Example 4" />
      <Button5 buttonText="Example 5" />
    </div>
  );
}


export default App;
