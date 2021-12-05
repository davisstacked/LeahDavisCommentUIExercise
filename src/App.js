import CommentContextProvider from './context/CommentContextProvider';
import RestaurantContextProvider from './context/RestaurantContextProvider';
import CommentPage from './CommentPage';

// import CommentFormTwo from './CommentFormTwo';
// import CommentList from './CommentList';
// import MouseOverPopover from './Popover';

import './App.css';



function App() {

  return (
    <div className='App'>
      <RestaurantContextProvider>
        <CommentContextProvider>
          <CommentPage />
        </CommentContextProvider>
      </RestaurantContextProvider>
    </div>
  );
}

export default App;
