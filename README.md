### CommentUI Exercise

## SCRIPTS
# NOTE ON START 
I've recently (Dec 2021) updated Node.js to v17.0.1 so to run CRA, I needed to update the package.json `start` and `build` scripts to: 
  "scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",
    }

[Stackoverflow](https://stackoverflow.com/questions/69665222/node-17-0-1-causes-some-error-digital-envelope-routinesunsupported)

If you're having problems starting the project, replace with the following:

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

`CommentUI Exercise` is a single-page React app for viewing restaurant information, their ratings and comments. 

User's can add their own Restaurant reviews using the `CommentForm`. Their `Comment` will be added to the end of the list of comments along with their username and image.

When a `Comment` is hovered over, a popup appears with Delete and Edit buttons. 

When the user clicks on the Edit icon, the `EditForm` is displayed in place of their comment. The text of their previous comment displays in the text field. The user can edit this comment and save their updated comment. 

When the user hover's over a comment, a popup appears with DELETE AND EDIT icons. 



###### Delete and Edit


Two options were considered for implementation:

1. Create a new state prevState, Store the current comments in a new state, then delete the

2. On Delete, use setTimeout to hide the comment for 5 seconds by toggling state to isDeleting. If the user clicks the undo button during that time, then state toggles back.  

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

How I handled disabling the button? maybe. 

<!-- index.css -->
To make the form responsive I set the font-size to 10px in order to easily use the rem unit. 

<!-- Comment.css -->
<!-- should be moved to the asset file called comment.css -->
Comment.css holds the CSS for CommentList, Comment, and Comment form because React will create an element in one Component but display it in another.

I wanted to show my understanding of both context and props. 

- maybe switch the - i was undecided between two solutions for the delete and undo buttons. 

One is to store the current state in ` [prevState
- Organize the CSS - Move the Edit and Form components


#### State management
* Managed state that was need by many components throughout the app with React hooks useContext. comment state is managed using React's Context API `CommentContextProvider`

#### API calls
* handled in `src/API/UnicornAPI.js`, which includes a static API class tying together all methods used to communicate with API
* prevents code duplication and separates concerns

###### A Short Reflection



#### EXCELS

I'm most proud of the delete and edit buttons that appear when the 
#### LIMITATIONS
##### Next Steps:

- Create an `ErrorMessage` component that will render an error message for the user if there is a problem fetching and loading data.

- Use Git Rebase to clean up Github commits. 

- Create reusable variables for colors in CSS.

- Since there were many design and functionality features in common between `EditForm` and `CommentForm`, create an `Asset` `form.css` that holds all of their shared functionality together (same thing with Comment) `Comment.css`. Create `comment.css` inside of the `Asset` folder.

- Further simplify my `Components` by creating custom `hooks` logic such as **useInputState** for reusable form functionality such as **handleChange** and reusable small components i.e. `Button`.

- Create a backend so users can login, create profiles, and review restaurants under their profile name and image. 




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
