import './App.css';
// import { Greet } from './components/Greet.js'
//import { Message } from './components/Message.js'
import { ClickHandler } from './components/clickHandler';
import { ParentComponent } from './components/ParentComponent';

function App() {
  return (
    <div className="App">
{/* 
      { <Greet name='Bruce' heroName='Batman'/>
      <Greet name='Clark' heroName='Superman'>
        <button>
          Action
        </button>
      </Greet>
      <Greet name='Diana'heroName='Wonderwoman'>
        <p>This is children props</p>
      </Greet> }
      <Message/> */}
      {/* <ClickHandler/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
