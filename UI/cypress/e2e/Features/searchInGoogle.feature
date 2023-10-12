Feature: Search in Google

Scenario Outline: Searching for a Wikipedia Page on Google
Given I am on the Google homepage
When I search for "<subject>" and click on the Wikipedia link in the search results
And the title should be "<subject>" it should contain the year of the first automated process
Examples:
| subject |
| Automatización |
