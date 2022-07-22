# Requirements
Build a React application that satisfies the attached screenshots as described below:
- As a user, when I first open the application, I should be in the Home page by default, and I should see the app header as well as the page content.
  
- #### Header Acceptance Criteria:
  - As a user navigating to **"Pokemon"** app, I should see the app header which includes the application name "Pokemon" and favorites icon.
  - Clicking on favorites icon navigates to **"Favorites"** page *(screen #2)*, while clicking the application name navigates back to the **Home page** *(screen #1)*.

- #### Home Page Acceptance Criteria:
  - As a user, I should see each pokemon displayed as a card that represents the pokemon name, image and strength, in addition to "Add to Favorites" button.
  - As a user, I expect to see a loading indicator while loading the pokemons, or an error message if there's any.
  - If I Click on **"Add to Favorites"** button, then the button appearance should change to represent that the pokemon is added to favorites, and the number of favorites in the header should also increase and vice-versa.

- #### Favorites Page Acceptance Criteria:
  - As I user, when I navigate to the Favorites page, then I should see a list of all the pokemons I have added to favorites earlier from the Home page.
  - If the Favorites list is empty, then I should see a descriptive text saying *"Oops! Looks like you  haven't added any pokemons yet."* and I should also see a call-to-action button that takes me back to the Home page.
  - If I click on "Remove" button of a specific pokemon, then it be should removed from the favorites list as well as being *unselected* in the Home page (i.e., the pokemon card "Add to Favorites" button in home page should turn to the unselected state.)
  - If I click on "Remove All" button, then I expect the list to become empty, and none of the pokemons in the Home page to be selected.
  

> #### Bonus: 
> - Given that I have already added some pokemons to Favorites, then when I refresh the page, I should still have the pokemons in the list as before.


# Technical guidelines 

- Build a React application that satisfies the above acceptance criteria.
- For styles, use whatever works for you (e.g., vanilla css, preProcessors, css-in-jss, etc.). The goal is to have a responsive design and to avoid class names collision.
- Use Redux for global state management.
- A high test coverage is required. Fell free to use Enzyme or react-testing-library.
- [Prefered]: Use Typescript for types safety.
- Find the pokemon json data attached in the zip file. You can fetch it in the run time from **/pokemon.json**

> Hint: You can add the pokemon.json to /public directory, and then in your API call you'd fetch it as **GET /pokemon.json**

# Notes
- Consider that this application should be production-ready. Follow the common best-practices even if it's not necessary on such small task.
- A well-designed and clean solution is more important than a complete solution.
- Please don't add the code on GitHub or any other source control provider.