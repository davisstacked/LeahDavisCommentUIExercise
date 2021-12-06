### CommentUI Exercise

### Scripts
#### NOTE ON START AND BUILD SCRIPTS
I recently (Dec 2021) updated Node.js to v17.0.1 so to run Create React App, I needed to update the package.json `start` and `build` scripts to: 
  "scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",
    }

[Stackoverflow](https://stackoverflow.com/questions/69665222/node-17-0-1-causes-some-error-digital-envelope-routinesunsupported)

If you're having problems starting the project, in `package.json` replace with the following:

  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
  },


`npm install` to install dependencies 

`npm start` to run app in development mode on [http://localhost:3000](http://localhost:3000)

`npm test` to run tests in interactive watch mode

`npm run build` to build app for production in the `build` folder

### USER STORIES 
#### Overview

`CommentUI Exercise` is a single-page React app for viewing restaurant information and restaurant ratings as well as user comments. 

User's can add their own restaurant reviews using the `CommentForm`. Their `Comment` will be added to the end of the `CommentList` of comments along with their username, image and the time the comment was created.

###### Delete and Edit Buttons

When a `Comment` is hovered over, a popup appears with Delete and Edit button icons. 

When the user clicks on the `EditIcon`, the `EditForm` is displayed in place of their comment. The text of their previous comment displays in the text field, and the user can edit this and save their updated comment. 

When a user clicks the `DeleteIcon`, their comment disappears and a Delete Confirmation popup appears in its place with a five second window where users can Undo their delete.  

## TECHNOLOGY

**Language**: JavaScript  
**Tools**:   

|Tool Name|Function|
|---|---|
|**ReactJS**|to write reusable components|
|**Create-React-App**|to setup React and initial folder structure|
|**uuid**|to assign children unique key props|
|**classnames**|to conditionally render classes|
|**figma**|to get exact measurements, images, and a visual for the final app |

## Approach 

###### Responsive Design
In `<html>` in `Index.css`, I set the font-size to 10px in order to set one Rem Unit equal to 10px. This greatly simplified translating the Figma mockup into code as I could simply divide pixels by ten.

With only few other code modifications necessary, the `CommentPage` is already responsive by simply changing the value of **font-size** in `<html>` inside of a media query.

#### State management
* I managed state that was needed by many components throughout the app using `CommentContextProvider` and `CommentContext` in juncture with React Hooks **useRef** **useState** and **useEffect**. 

I also passed props in many `Components` when the function or state was only needed by one or two levels of the component tree. Specificially `EditForm` `Comment` and `CommentList` use comments. 

#### fetching dada
* handled in `CommentPage` with a try catch statement.

### A Short Reflection
##### GREAT STUFF

I'm most proud of the **delete** and **edit** buttons that appear when the `Comment` is hovered over, as well as the delete button triggering a Delete Confirmation popup in its place with a five second window to reverse the delete using the **undo** button.

I had a couple ideas of how to achieve this:

##### NEXT STEPS:

- Create an `ErrorMessage` component that will render an error message for the user if there is a problem fetching and loading data.

- Use Git Rebase to clean up Github commits. 

- Create reusable variables for colors in CSS.

- Since there were many design and functionality features in common between `EditForm` and `CommentForm`, create an `Asset` `form.css` that holds all of their shared functionality together (same thing with Comment) `Comment.css`. Create `comment.css` inside of the `Asset` folder.

- Further simplify my `Components` by creating custom `hooks` logic such as **useInputState** for reusable form functionality such as **handleChange** and reusable small components i.e. `Button`.

- Create a backend so users can login, create profiles, and review restaurants under their profile name and image. 

- Simplify ContextProvider to only state and functions used by many components.




## Approach 

#### API calls
* handled in `src/API/UnicornAPI.js`, which includes a static API class tying together all methods used to communicate with API
* prevents code duplication and separates concerns

#### Components
* `App` ➡️ `Context Providers`➡️ `Routes`
* `Routes` includes Switch statement to Homepage (`/`), Game Page (`/game`) and Redirect to Homepage in case of typo following base URL
* route `/game` renders `Game` component
* `Game` component uses state to switch between
	* `SetupPage` where user selects game difficulty, maze size & name
	* `MazeWrapper` which includes actual Game
	* `WinPage` where user can start new game and be redirected to homepage
	* `LosePage` as above

#### State management
* state is managed using React's Context API & split into 3 providers: `GameContextProvider`, `AudioContextProvider`, `MoveContextProvider`

#### Maze Rendering
* maze drawing utilises CSS properties `gridTemplateColumns` and `border-top`, `border-bottom`, `border-left`, `border-right`
* API call retrieves grid data array, which is then transformed using helper functions to include additional items `east` and `south` wherever appropriate, as well as `index number`
* transformed grid data array mapped over to render individual `GridCell` components, passing down `borders`, `index` and `sprite positions` as props
* `GridCell` uses props to conditionally render borders & sprites

#### Use of external libraries
I tried to balance the recommended approach of "not reinventing the wheel" with demonstrating my capability to write code independendly. Whilst I leant heavily into external resources to handle movement and sound, I chose to refrain from using an external library and instead demonstrate original code writing in other places, for example in the `Form` component.



## Resources

All resources used are royalty-free.  
Icons: [material-ui](https://phosphoricons.com/), [font-awesome](https://fontawesome.com/)
SVG background: [bg-jar](https://bgjar.com/)  
Art: [pinclipart](https://www.pinclipart.com/), [pngkit](https://www.pngkit.com/), [pexel](https://www.pexels.com/)  
Audio Effects: [mixkit](https://mixkit.co/free-sound-effects/game)

## Limitations

**Testing**: I am aware that the app lacks testing. I look forward to delving into testing in the future by learning about mocking as well as end-to-end testing libraries such as Cypress. 
## Screengrab 

![screengrab](./src/Assets/Imgs/screengrab.png)
