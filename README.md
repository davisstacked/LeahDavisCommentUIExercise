# CommentUI Exercise

### Scripts
#### IMPORTANT NOTE ON START AND BUILD SCRIPTS
I recently (Dec 2021) updated Node.js to v17.0.1 so to run Create React App, I needed to update the `package.json` `start` script to: 
  "scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
    }

[Stackoverflow](https://stackoverflow.com/questions/69665222/node-17-0-1-causes-some-error-digital-envelope-routinesunsupported)

If you're having problems starting the project, in `package.json` replace with the following:

  "scripts": {
    "start": "react-scripts start",
  }

`npm install` to install dependencies 

`npm start` to run app in development mode on [http://localhost:3000](http://localhost:3000)

`npm run build` to build app for production in the `build` folder

### Overview
#### USER STORIES 

`CommentUI Exercise` is a single-page React app for viewing restaurant information and restaurant ratings as well as user comments. 

User's can create their own restaurant reviews and see them displayed in a list of other user's reviews. Comments are displayed along with username, image and the time the `Comment` was created.

##### Delete and Edit Buttons

When a comment is hovered over, a popup appears with Delete and Edit button icons. 

When the user clicks on the `EditIcon`, the `EditForm` is displayed in place of their comment. The text of their previous comment displays in the text field, and the user can edit this and save their updated comment. 

When a user clicks the `DeleteIcon`, their comment disappears and a Delete Confirmation popup appears in its place with a five second window where users can Undo their delete.  

### TECHNOLOGY

**Language**: JavaScript  
**Tools**:   

|Tool Name|Function|
|---|---|
|**ReactJS**|to write reusable components|
|**Create-React-App**|to setup React and initial folder structure|
|**UUID**|to assign children unique keys and ids used with state to manipulate comments using their ids|
|**classnames**|to conditionally render classes based on state or functions|
|**figma**|to get exact measurements, images, and a visual of the final app|
|**moment**|to get the current date and time when posting a new comment and to display it in "years/months/minutes/seconds ago" format.

### Approach 

##### Responsive Design

* In <html> in `Index.css`, I set the font-size to 10px in order to set one **rem unit equal to 10px**. This greatly simplified translating the Figma mockup into code as I could simply divide pixels by ten.

With only few other code modifications necessary, the `CommentPage` is already responsive by simply changing the value of **font-size** in <html> inside of a media query.

##### State management

* I managed state that was needed by many components throughout the app using `CommentContextProvider` and `CommentContext` in juncture with React Hooks **useContext** **useState** and **useEffect**. 

I also passed props in many `Components` when the function or state was only needed by one or two levels of the component tree. Specificially `EditForm`, `Comment`, `CommentButtons` and `CommentList` utilize props. 

#### Fetching Data

* handled in `CommentPage` using the **useEffect hook** and asynchronous Javascript with a try-catch statement to catch errors. Data fetched is split into two states, one for the `Restaurant` component which displays the restaurant information, and one for the `CommentList` component which displays user comments. Before putting the data into state, I mapped over the **comments** in order to add unique ids[UUID].

#### Components

* `App` ➡️ `CommentProvider` ➡️ `CommentPage` 
* `CommentPage` the single page application. Fetches data and renders all other Components.
* `Restaurant` displays restaurant information.
* `CommentForm` users can add new comments to the CommentList.
* `CommentList` renders the list of user comments.
* `CommentButtons` the edit, delete and undo buttons for the `Comment` component
* `Comment` where user selects game difficulty, maze size & name.
* `EditForm` a form that allows users to update their comments.

## A Short Reflection
#### GREAT STUFF

I had the most headaches over and am **most proud** of the **delete** and **edit** buttons that appear together in a popup when the `Comment` is hovered over, as well as the delete button triggering a Delete Confirmation popup in its place with a five second window to reverse the delete using the **undo** button.

I had a couple ideas of how to achieve this:

1. Put the pre-deleted state into **useState** prevState. Delete the comment immediately onClick. If within five seconds the user clicks undo, reload state with our prevState.

The problems I found with this were largely style-related. If the comment is deleted right away, how will the undo button exist inside of this Component? It will disappear too. And how will I know where the button should appear within the comment-list without it's comment to anchor it somewhere?

So I went with my other idea:

2. Instead of deleting the comment on button click, I hide it from the DOM instead, creating and changing a **useState hook** to isDeleting=true.  

Instead of making the comment totally invisible. I hid its inner text and made the Comment only 1px high. This still gave the Undo button a place to anchor while also matching the desired appearance of the mockup.

Use setTimeOut to give the user five seconds to undo the delete by toggling !isDeleting. I learned that you can't get updated state within a setTimeOut function as it will refer to the old state. 

  [Medium](https://medium.com/programming-essentials/how-to-access-the-state-in-settimeout-inside-a-react-function-component-39a9f031c76f)

useRef hook grabs newly updated state the setTimeOut function can read. 

#### NEXT STEPS:

- Create an `ErrorMessage` component that will render an error message for the user to try reloading the page if there is a problem fetching and loading data.

- Use Git Rebase to clean up Github commits. 

- Create reusable variables for colors in CSS.

- Further organize the CSS files for readability.

- Further simplify my `Components` by creating custom `hooks` logic such as **useInputState** for reusable form functionality such as **handleChange** and reusable small components i.e. `Button` and `Avatar`.

- Create a backend so users can login, create profiles, and review restaurants under their profile name and image. 

