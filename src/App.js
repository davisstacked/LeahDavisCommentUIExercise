import CommentContextProvider from './context/CommentContextProvider';
import CommentPage from './Components/CommentPage';

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
