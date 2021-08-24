import Header from './components/UI/Header';
import { PublicRouter } from './routes';
import './styles/global.scss';

function App() {
  return (
    <main>
      <Header />

      <PublicRouter />
    </main>
  );
}

export default App;
