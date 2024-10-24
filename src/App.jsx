
import './App.css'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Store from './store';
// import Example from './Example';


export default function App() {
return (
    <div className='App'>
      <DndProvider backend={HTML5Backend}>
        <Store/>
        {/* <Example/> */}
      </DndProvider>
    </div>
  );
}