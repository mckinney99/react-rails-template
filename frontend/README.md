Run linter:
`yarn run prettier --write .` - this linter will automatically run on save via the settings found in .vscode/settings.json

Run formatter (Prettier)
`yarn format`

# CSS/Styling
We import components from Chakra-ui. 

For styling, please utilize the built in Chakra styling system: https://chakra-ui.com/docs/styled-system/style-props



# Change storybook library
To change the storybook library you are using...

Find a library you like from: https://storybook.js.org/showcase/projects
and install it using `yarn add <storybook_library>`

You'll most likely need to render a provider. You can do that by replacing the default library: Chakra-ui, here: frontend/src/index.tsx

You should also remove the default Chakra library '@chakra-ui/storybook-addon' from frontend/.storybook/main.ts and replace it with the new one if needed


Then just import components from the library as you need.

The default Chakra-ui library can be found here: https://chakra-ui.com/docs/components






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
