
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Extension from './ExtensionFolder/Extension';
function Links() {
  return (
    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/see/extensions' element={<Extension/>}/>
        </Routes>
 
  );
}

export default Links;