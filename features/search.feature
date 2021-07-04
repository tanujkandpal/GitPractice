Feature: Searching of various categories should be possible along with product search

Background:
Given I visit the website as a guest user


Scenario: Search for the products under Books category
When I select the books option from the dropdown
And I click on Search icon
Then I should see the books page loaded
And I should see Books at Amazon as heading
But I should not see other category products


Scenario: Search for the products under Baby category
When I select the Baby option from the dropdown
And I click on Search icon
Then I should see the Baby page loaded
And I should see The baby store as heading
But I should not see other category products

