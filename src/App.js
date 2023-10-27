import './App.scss';

import { GlobalContextProvider } from './contexts/globalContext';
import { Header } from './components/Header/Header';
import { RoutesManager } from './components/Routes/RoutesManager';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <GlobalContextProvider>
      <div className='app'>
        <Header />

        <div id='main'>
          <RoutesManager />
        </div>

        <Footer />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
