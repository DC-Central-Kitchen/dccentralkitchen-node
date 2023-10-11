# dccentralkitchen-node

## Healthy Corners Rewards - Backend Server

All documentation lives at <https://healthycorners-rewards.netlify.app> - for new contributors, we recommend starting with the [project overview](https://healthycorners-rewards.netlify.app/shared/overview.html).

- The documentation for this repo can be found here: <https://healthycorners-rewards.netlify.app/node/>.
- The traditional README lives at the "Getting Started" page: <https://healthycorners-rewards.netlify.app/node/getting-started.html>

## Companion projects

- Customer-facing mobile application: [`dccentralkitchen`](https://github.com/calblueprint/dccentralkitchen)
- Clerk-facing tablet application: [`dccentralkitchen-clerks`](https://github.com/calblueprint/dccentralkitchen-clerks)

## Heroku Scheduler

- App uses Heroku Scheduler, to run scheduled tasks every day to update Airtable products.
- Heroku App in use : https://dashboard.heroku.com/apps/healthy-corners-dev
- Auto-deploy has been setup in Heroku, every push to "main" is automatically deployed in the heroku app.

## Airtable Personal Access Tokens
- Please ensure that you switch between development (Dev) and production (Prod) personal access tokens in your environment file when working in the respective environments.
- Additionally, don't forget to delete the "PROD" string in the scheduled-update.js file while testing in the development (Dev) environment.
