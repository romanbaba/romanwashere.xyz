import { Routes, Route } from 'react-router-dom';
import { Home, NotFound } from './pages';
import { Seo } from './components';

const App = () => {
  return (
    <>
      <Seo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;