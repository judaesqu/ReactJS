import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Index from "./pages";
import Create from "./pages/Create";
import View from "./pages/View";
import Store from './store/store';
function App() {
  return (
      <Store>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Index />} />
        <Route path = 'Create' element = {<Create />} />
        <Route path = 'View/:bookId' element = {<View />} />
      </Routes>
      </BrowserRouter>
      </Store>
  );
}

export default App;
