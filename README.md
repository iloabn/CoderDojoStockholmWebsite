# CoderDojoStockholmWebsite
This repo contains the code that generates the public website for [CoderDojo Stockholm](https://coderdojostockholm.se).

It outlines the goals, how it functions and how to set it up locally.

# Goals
There are two main goals of this project:
1. Make information available about CoderDojo Stockholm and upcoming Dojos
1. Make it simpler to setup a future Dojo with less manual steps

# Setup locally
## Install dependencies
Installation is pretty easy, simply poosition yourself in the repository and run:
```
npm install
```

## Run
To run the project locally, you simply execute:
```
npx @11ty/eleventy --serve
```

That will launch a local server and you're now ready to start to make changes. Running the website like that will automatically refresh any changed HTML pages as soon as you edit them so that you can quickly and easily make changes.

# Architecture
There's a few special things that happen in this project, and some more normal things 😋

Most of the normal pages are simple markdown pages and placed inside of `/subpages/`.

## Sitemap
The sitemap is automatically generated upoon building of the project and includes every file except thoose that have `eleventyExcludeFromCollections: true` in their data flow. Every page is set with an update frequency of "yearly" unless specified with `changefreq:`.

## Dojos
In the folder `/dojos/` an individual Dojo page can be created by simply creating a markdown file with the name of the date of the Dojo. It will automatically use the correct layout and some generic information will be added for a Dojo. If there's some specific information that we want to share for a Dojo, that can be added in that file and will be shown to visitors as well.
The only required data for a dojo file is the parameter `ticketUrl:` that should be set to the tickettailor URL of the next Dojo.

## List of upcoming Dojos
The list of upcoming Dojos is shown in a few places, including the homepage and every 404 page throughout the site.

That list shows the three upcoming Dojos sorted from first -> last.

The list is only generated on build, so it's recommended to build and deploy the site very close to the end of a Dojo to ensure that the upcoming list of Dojos stays up to date and that previous Dojos are removed.

## Next Dojo-page
There's a specific page `/next-dojo/` that always shows the next Dojo. What it does in practice is loop through the list of Dojos, but only take the first Dojo and display information about it.

## GitHub Actions
There are two actions that run for this project right now.
The most important one is an action that both deploys the site, and also runs percy against the startpage. When it's run on a PR, it deploys a preview-page on Azure, and on main, it simply deploys the site. Every change on main is auto-approved for percy while PR builds are compared and might have to be manually approved.

The other action is only run when PRs are closed, and it simply removes the preview-page from Azure.

# Creating a new Dojo
For now, there's a few things that needs to happen to fully prepare a Dojo online:

- Copy an event on tickettailor
  - Set correct date and location
  - Update the venue sponsor code
  - Copy the tickettailor link from the ["embed"-page](https://app.tickettailor.com/promote/website-embed-codes). Make sure that you select the correct event and copy the link that starts like this: www.tickettailor.com/checkout/new-session/id/
- In a new branch, create a page in `/dojos/` with the filename that is the date of the new Dojo like this  `yyyy-MM-dd.md`
  - Past the copied embed link into that file as front matter data in the parameter `ticketUrl`
  - If you want, add more information about that specific Dojo in the newly created file.
- Create the event on social media and/or write a post about it
  - LinkedIn
  - Instagram
  - Facebook
- Create a PR and merge into main

Yay, you're done 🥳