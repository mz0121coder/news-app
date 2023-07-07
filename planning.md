# News App - Plan

## Stage 1 - project setup

- Create desktop and mobile wireframes (in progress)
- Plan and create a starting component tree diagram with pages, components and props mapped out ✅
- Create a js file and test file for main components, nest children inside of parent folders ✅
- Set up folder structure (CRA) ✅
- Install react router dom ✅
- Set up Route to HomePage ✅
- Set up Route to ArticlePage✅
- install dotenv and create .env file ✅
- create account for news API and add API key to .env file, use the key in the HomePage component ✅
- auto deploy on Netlify ✅
- netlify toml file to prevent refresh issues ✅
- add env and set CI to false on netlify for smooth deployment ✅

## Stage 2 - rendering events

- Create a reusable template for NewsItem component ✅
- Create state for search that updates as user types ✅
- Create state for articles that updates on each fetch request, based on the most recent search ✅
- Pass the articles down to ResultsArea component ✅
- Pass props (title, image, description, url, source, date) from HomePage to ResultsArea, then use this data to render the child component (NewsItem) for each article ✅
- Show dates in this format: '11th July, 2023' ✅
