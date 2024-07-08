
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
function Links() {
  return (
    
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
 
  );
}

export default Links;