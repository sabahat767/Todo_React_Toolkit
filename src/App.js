import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/AddTodo';
import { Provider } from 'react-redux';
import store from './store/store';
import ApiData_display from './Components/ApiData_display';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AddTodo/>
      {/* ?<ApiData_display/> */}
    </div>
    </Provider>
  );
}

export default App;
