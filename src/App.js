import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import NavBar from './components/NavBar';
import TaskContextProvider from './contexts/TaskContext';

function App() {
  return (
    <div className='App'>
      <TaskContextProvider>
        <NavBar />
        <TaskList />
        <TaskForm />
      </TaskContextProvider>
    </div>
  );
}

export default App;
