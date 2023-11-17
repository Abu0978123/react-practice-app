import "./App.css";
import CounterPage from "./components/CounterPage";
import Reducer from "./components/Reducer/Reducer";
import Form from "./components/form/Form";
// import Props1 from "./components/Props1";
// import Props2 from "./components/Props2";
import ContextHolder from "./context/ContextHolder.jsx";
import CustomPagination from "./pagination/CustomPagination";
import { Pagination } from "./pagination/Pagination";
// import UseState from "./components/UseState";
// import UseEffect from "./components/UseEffect";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./redux/Home";
import Memo from "./Memo/Memo";
import Callback from "./UseCallback/Callback";
import ControlComp from "./ControlComp/ControlComp";
import Timer from "./Timer/Timer";
import Comp from "./UncontrollComp/Comp";
function App() {
  return (
    <div>
      {/* Its a simple useState */}
   <div className="display-flex" style={{marginBottom: "80px", borderBottom: "8px black solid"}}>
    <div style={{border: "2px solid black", padding: "10px"}}>
      <h3>Its a simple useState</h3>
    <CounterPage/>
    </div>
    
    {/* Its a simple useReducer */}
    <div style={{border: "2px solid black", padding: "10px"}}>
      <h3>Its a simple useReducer</h3>
    <Reducer/>
    </div>
    </div>
         {/* here is the redux state management  */}
    <div className="pagination-with-npm-pkg" style={{borderBottom: "8px black solid", marginBottom: "50px",border: "2px solid black", padding: "10px"}}>
      <h1 style={{color: "red"}}>React Redux state management </h1>
      <Provider store = {store}>
        <Home/>
      </Provider>
    </div>

    <div className="custom-pagination" style={{borderBottom: "8px black solid"}}>
    <h1 style={{color: "red"}}>React Custom Pagination</h1>
    <CustomPagination/>
    </div>

    <div className="custom-pagination" style={{borderBottom: "8px black solid"}}>
    <h1 style={{color: "red"}}>UseMemo hook</h1>
    <Memo/>
    </div>

    <div className="custom-pagination" style={{borderBottom: "8px black solid"}}>
    <h1 style={{color: "red"}}>UseCallback hook</h1>
    <Callback/>
    </div>

    <div className="custom-pagination" style={{borderBottom: "8px black solid"}}>
    <h1 style={{color: "red"}}>Control Component hook</h1>
    <ControlComp/>
    </div>

    <div className="custom-pagination" style={{borderBottom: "8px black solid"}}>
    <h1 style={{color: "red"}}>UnControl Component hook</h1>
    <Comp/>
    </div>

    <div className="custom-pagination" style={{borderBottom: "8px black solid"}}>
    <h1 style={{color: "red"}}>Live Time</h1>
    <Timer/>
    </div>

    <div className="form" style={{marginBottom: "20px"}}>
    <Form/>
    </div>

    </div>
   
  );
}

export default App;
