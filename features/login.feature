Feature: Login in omayao website

@login
Scenario Outline: Login  Details
Given I visit the omayo website
When I enter <username> and <password> in the fields
And I click the login button
Then I should be logged in on the basis of <loginstatus>
 Examples:
|username					|password		|loginstatus	|
|SeleniumByArun		|Test143$		|Sucess				|
|satya@gmail			|12345			|Fail					|