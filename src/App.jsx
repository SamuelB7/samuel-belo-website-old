import './App.css';
import { Header } from './components/Header/Header';
import { AppRoutes } from './components/Routes';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
