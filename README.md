## Cook50 - Michael Podolsky

#### Video Demo:

https://youtu.be/zx8RrBmnoHU

#### Introduction:

This CS50 Final Project showcases an extensive catalog of recipes for various foods. The website displays images of the food, calorie count, estimated time to prepare/cook, a detailed list of ingredients, and a combination of health, diet, and allergen information. The website features a search bar in which the user can utilize to search for recipes matching the provided query. Users can also choose to "save" recipes, which can be accessed via a separate page. Saved recipes are maintained throughout reloads and different browsing sessions.

#### Tech Stack:

The project is built using NextJS. Sass is utilized for styling pages and components. Vercel handles the deployment of the project.

#### Libraries Used:

Axios is used to make asynchronous requests to Edamam's Recipe API. FontAwesome provides the site's icons. Material UI is utilized for its built-in components and styling. React Toastify brings in toast notifications to provide visual feedback to the user.

#### File Structure:

The file structure of the project is organized in such a way that any new developer should be able to quickly pick up the repository and be comforable finding various pages and components. The `pages` directory contains the website's pages, in which each file's name corresponds to the route name. The `components` directory contains all of the components used throughout the project. The `styles` directory contains all of the stylesheets, and is organized via `pages` and `components` directories within, in order to correspond each stylesheet to its appropriate page/component. Finally, the `services` directory contains the API information and route calling functions.

#### API:

The website relies on Edamam's Recipe API to receive data. This includes the querying route, which takes in a user query and returns a list of corresponding recipes.

#### Saved Recipes Integration:

User-saved recipes are handled via the brower's localStorage. A stringified array is stored which contains a list of saved recipes, which is ultimately parsed and shown to the user when accessed.

#### Design Choices:

The website finds a balance between simplistic and full of details. The color palette was updated many times throughout the development process until the final result was reached.

#### Mobile Responsiveness:

The entire website is responsive to mobile devices and all resolutions. This is achieved via the use of media queries, which update the SCSS of pages/components in response to the viewport sizing.

#### Server-Side Rendering:

When making a query, the website uses Server-Side Rendering from NextJS in order to call the API through the server to fetch data before mounting components to the DOM.

#### File Path Aliases:

Via a jsconfig.json file, aliases are created for commonly used file paths (~components, ~services, ~styles). This allows for absolute file imports in components, which greatly improves scalability.

#### Learning Outcomes:

This project provided me the opportunity to take a NextJS project from complete start to finish, including UI designing + building, API research + integration, localStorage integration, routing, server-side rendering, and deployment.
