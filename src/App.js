
import './App.css';
import SighUpForm from './components/Forms/SignUpForm';
import Login from './pages/Login';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>

      <h1>LoginForm</h1>
      <Login />
      <h1>SignUpForm</h1>
      <SighUpForm />

    </QueryClientProvider>
  );
}

export default App;

