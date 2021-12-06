import CommentContextProvider from './context/CommentContextProvider';
import CommentPage from './Components/CommentPage';

import './App.css'

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
