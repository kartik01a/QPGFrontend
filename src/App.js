import { Route,Routes } from 'react-router-dom';
import './App.css';
import Form from './HomeForm';
import Result from './Result'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/result' element={<Result/>}/>
    </Routes>
    </>
  );
}

export default App;
