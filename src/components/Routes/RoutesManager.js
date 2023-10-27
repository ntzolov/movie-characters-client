import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { globalContext } from '../../contexts/globalContext';

import { Home } from '../Home/Home';
import { LoginRegister } from '../LoginRegister/LoginRegister';
import { Logout } from '../Logout/Logout';
import { Catalog } from '../Catalog/Catalog';
import { Create } from '../Create/Create';
import { Details } from '../Details/Details';
import { Edit } from '../Edit/Edit';
import { News } from '../News/News';
import { About } from '../About/About';
import { ForbiddenError } from '../ForbiddenError/ForbiddenError';
import { NotFoundError } from '../NotFoundError/NotFoundError';

export const RoutesManager = () => {
  const { user } = useContext(globalContext);

  return (
    <div id='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:characterId' element={<Details />} />
        <Route path='/catalog/:characterId/edit' element={<Edit />} />
        <Route path='/create' element={user ? <Create /> : <ForbiddenError />} />
        <Route path='/news' element={user ? <News /> : <ForbiddenError />} />
        <Route path='/about' element={<About />} />
        <Route path='/auth' element={!user ? <LoginRegister /> : <ForbiddenError />} />
        <Route path='/logout' element={user ? <Logout /> : <Home />} />
        <Route path='*' element={<NotFoundError />} />
      </Routes>
    </div>
  );
};
