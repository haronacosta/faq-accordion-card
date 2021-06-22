import 'normalize.css';
import './scss/app.scss';
import List from './components/accordion/List';
import Imagen from './components/images/Imagen';

function App() {
  return (
    <div className='App'>
      <div className='page-wrapper'>
        <Imagen />
        <List />
      </div>
    </div>
  );
}

export default App;
