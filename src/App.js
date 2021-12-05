import CommentContextProvider from './context/CommentContextProvider';
import RestaurantInfo from './RestaurantInfo';
import CommentPage from './CommentPage';

import './CommentPage.css';

// import CommentFormTwo from './CommentFormTwo';
// import CommentList from './CommentList';
// import MouseOverPopover from './Popover';

function App() {

  return (
    <div className='App'>
        <CommentContextProvider>
          <CommentPage />
          {/* <RestaurantInfo /> */}
        </CommentContextProvider>
    </div>
  );
}

export default App;
