import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import ALivrer from './ALivrer';
import FormPlats from './FormPlats';
import ListePlats from './ListePlats.js'
import Menu from './Menu';
import Profil from './Profil';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './CustomNav';
import FormModifPlats from './FormModifPlats';

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <Menu />
      <Routes>
        <Route exact path={'/plats'} element={<ListePlats />}></Route>
        <Route exact path='/a-livrer' element={<ALivrer />}></Route>
        <Route exact path='/profil' element={<Profil />}></Route>
        <Route exact path='/add-plat' element={<FormPlats />}></Route>
        <Route exact path='/update-plat/:id' element={<FormModifPlats />}></Route>
      </Routes>
      <CustomNav />
    </div >
  );
}

export default App;
