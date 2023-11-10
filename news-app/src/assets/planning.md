# News App - Plan

## Stage 1 - project setup

- Create desktop and mobile wireframes (in progress)
- Plan and create a starting component tree diagram with pages, components and props mapped out ✅
- Create a js file and test file for main components, nest children inside their parent folders ✅
- Set up folder structure (CRA) ✅
- Install react router dom ✅
- Set up Route to HomePage ✅
- Set up Route to ArticlePage ✅
- install dotenv and create .env file ✅
- create account for news API and add API key to .env file, use the key in the HomePage component ✅
- auto deploy on Netlify ✅
- add a netlify.toml file to prevent refresh issues ✅
- add env and set CI to false on netlify for smooth deployment ✅
- install Material UI ✅

## Stage 2 - rendering articles

- Create a reusable template for NewsItem component ✅
- Create state for search that updates as user types ✅
- Create state for articles that updates on each fetch request, based on the most recent search ✅
- Pass the articles down to ResultsArea component ✅
- Pass props (title, image, description, url, source, date) from HomePage to ResultsArea, then use this data to render the child component (NewsItem) for each article ✅
- Show dates in this format: '11th July, 2023' ✅

## Stage 3 - styling articles

- Show articles as one row on mobile (max 480px width) ✅
- Show articles as grid with 2 on each row for tablets (600 to 900px) ✅
- Show as 3 on each row for other devices ✅
- Use Material UI card components to style the articles ✅
- Keep article title to a fixed length e.g. 50 characters, replacing extra characters with '...' ✅
- Make the card expand when clicking on 'view details', showing the description, full title, and news source link for the article ✅

## Stage 4 - refactoring and testing + extra features

- Look at code suggestions (use ChatGPT and/or Codium AI) to assess performance, readability and security of code. ✅
- Write tests for HomePage component. ✅
- Write tests for ResultsArea component. ✅
- Save articles to an array (savedNewsItems), keep them in local storage ✅
- Include a function to check no duplicate news items are added ✅
- Show a 'Snackbar' in the corner to indicate when a news item has been added, or if it already exists ✅
- View saved articles on the ArticlePage
- Create a MenuBar component that is used to direct the user to the HomePage and/or SavedArticles page ✅
- Only show the SearchBar component when the user is on the home page (not when checking saved articles)✅

## Stage 5 - show saved articles + finishing touches

- On SavedArticles page, use the useEffect hook, to get saved news items from local storage, using the same key ('savedNewsItems') ✅
- Use an empty array as the dependency because this only needs to be done the first time the component mounts. ✅
- REFACTORED => NOW USING savedNewsItems as dependency, after adding functionality to delete saved articles from the list ✅
- Render a NewsItem component for each of the saved items. ✅
- Do this by importing the previously created ResultsArea component, passing down the 'savedNewsItems' array for the 'articles' prop ✅
- Make a function to delete a news article from local storage, asking the user if they want to do so, showing a 'Snackbar' message when item is deleted
