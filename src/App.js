import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Board from './Components/Board';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className='app'>
      <Sidebar/>
      <div className='main-content'>
        <Header/>
        <Board/>
      </div>
      <Toaster/>
    </div>
    </DndProvider>
  );
}

export default App;