
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Extension from './ExtensionFolder/Extension';
import ScrollToTop from './ScrollToTop';
function Links() {
  return (
        <><ScrollToTop/>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/see/extensions' element={<Extension />} />
    </Routes></>
 
  );
}

export default Links;