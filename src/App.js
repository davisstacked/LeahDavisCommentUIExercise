import CommentContextProvider from './context/CommentContextProvider';
import CommentPage from './CommentPage';

// import CommentFormTwo from './CommentFormTwo';
// import CommentList from './CommentList';
// import MouseOverPopover from './Popover';

import './App.css';



function App() {

  return (
    <div className='App'>
      {/* <CommentList /> */}
    <CommentContextProvider>
      <CommentPage />
    </CommentContextProvider>
      {/* <MouseOverPopover /> */}
    </div>
  );
}

export default App;
