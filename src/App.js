import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormComponent from './Form-Component';
import 'bootstrap/dist/js/bootstrap.bundle.js'

function App() {
  return (
    <div className="App">
      <header>
       <FormComponent />
      </header>
    </div>
  );
}

export default App;
