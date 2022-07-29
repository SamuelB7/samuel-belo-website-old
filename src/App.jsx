import './App.css';
import { Header } from './components/Header/Header';
import { AppRoutes } from './Routes';
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
