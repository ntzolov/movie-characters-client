import './App.scss';

import { GlobalContextProvider } from './contexts/globalContext';
import { Header } from './components/Header/Header';
import { RoutesManager } from './components/RoutesManager/RoutesManager';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <GlobalContextProvider>
      <div className='app'>
        <Header />
        <RoutesManager />
        <Footer />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
