## Cook50 - Michael Podolsky

---

#### Video Demo:

https://youtube.com (to be updated)

#### Introduction:

This CS50 Final Project showcases an extensive catalog of recipes for various foods. The website displays images of the food, calorie count, estimated time to prepare/cook, a detailed list of ingredients, and a combination of health, diet, and allergen information. The website features a search bar in which the user can utilize to search for recipes matching the provided query. Users can also choose to "save" recipes, which can be accessed via a separate page. Saved recipes are maintained throughout reloads and different browsing sessions.

#### Tech Stack:

The project is built using NextJS. Sass is utilized for styling pages and components. Vercel handles the deployment of the project.

#### Libraries Used:

Axios is used to make asynchronous requests to Edamam's Recipe API. FontAwesome provides the site's icons. Material UI is utilized for its built-in components and styling. React Toastify brings in toast notifications to provide visual feedback to the user.

#### API:

The website relies on Edamam's Recipe API to receive data. This includes the querying route, which takes in a user query and returns a list of corresponding recipes.

#### Saved Recipes Integration:

User-saved recipes are handled via the brower's localStorage. A stringified array is stored which contains a list of saved recipes, which is ultimately parsed and shown to the user when accessed.

#### Mobile Responsiveness:

The entire website is responsive to mobile devices and all resolutions. This is achieved via the use of media queries, which update the SCSS of pages/components in response to the viewport sizing.

#### Server-Side Rendering:

When making a query, the website uses Server-Side Rendering from NextJS in order to call the API through the server to fetch data before mounting components to the DOM.

#### File Path Aliases:

Via a jsconfig.json file, aliases are created for commonly used file paths (~components, ~services, ~styles). This allows for absolute file imports in components, which greatly improves scalability.

#### Learning Outcomes:

This project provided me the opportunity to take a NextJS project from complete start to finish, including UI designing + building, API research + integration, localStorage integration, routing, server-side rendering, and deployment.
