import CommentContextProvider from './context/CommentContextProvider';
// import RestaurantInfo from './RestaurantInfo';
import CommentPage from './CommentPage';

// import CommentFormTwo from './CommentFormTwo';
// import CommentList from './CommentList';
// import MouseOverPopover from './Popover';

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
