import CommentContextProvider from './context/CommentContextProvider';
import CommentPage from './Pages/CommentPage';

function App() {

  return (
    <div className='App'>
      <CommentContextProvider>
        <CommentPage />
      </CommentContextProvider>
    </div>
  );
}

export default App;
