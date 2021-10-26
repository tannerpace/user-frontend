
import './App.css';
import SighUpForm from './components/Forms/SignUpForm';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <h1>LoginForm</h1>
      <Login />
      <h1>SignUpForm</h1>
      <SighUpForm />
    </div>
  );
}

export default App;

