# Ximdex frontend test

The following repo includes a simple frontend test developed for [Ximdex](https://www.ximdex.com/es/)

## Description

It has been developed using React.

## Tasks

* Create a dropdown menu that takes a title and a text body. The text should be hidden in its inactive state and show when active. The toggle should be smoothly animated.
* Following the second example the toggling of the dropdowns should be independent from each other. Meaning that one section can be active while the other is inactive - or for example: if more than three sections - two could be active and one inactive.
* The first two sections of the menu should be populated on page load by fetching JSON data from a local file or API.
* Your view should have a button that when clicked will add a section (title and text pair) to the page. The button should open a modal with a form that you will use to create the new title and text body. When the form is submitted the new section should appear in the dropdown menu.