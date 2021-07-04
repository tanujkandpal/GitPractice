$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login in omayao website",
  "description": "",
  "id": "login-in-omayao-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login  Details",
  "description": "",
  "id": "login-in-omayao-website;login--details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit the omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \u003cusername\u003e and \u003cpassword\u003e in the fields",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be logged in on the basis of \u003cloginstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-in-omayao-website;login--details;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "loginstatus"
      ],
      "line": 10,
      "id": "login-in-omayao-website;login--details;;1"
    },
    {
      "cells": [
        "SeleniumByArun",
        "Test143$",
        "Sucess"
      ],
      "line": 11,
      "id": "login-in-omayao-website;login--details;;2"
    },
    {
      "cells": [
        "satya@gmail",
        "12345",
        "Fail"
      ],
      "line": 12,
      "id": "login-in-omayao-website;login--details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6535871200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login  Details",
  "description": "",
  "id": "login-in-omayao-website;login--details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit the omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter SeleniumByArun and Test143$ in the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be logged in on the basis of Sucess",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_visit_the_omayo_website()"
});
formatter.result({
  "duration": 325024400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SeleniumByArun",
      "offset": 8
    },
    {
      "val": "Test143$",
      "offset": 27
    }
  ],
  "location": "Login.i_enter_and_in_the_fields(String,String)"
});
formatter.result({
  "duration": 450404900,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_login_button()"
});
formatter.result({
  "duration": 133274500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sucess",
      "offset": 38
    }
  ],
  "location": "Login.i_should_be_logged_in_on_the_basis_of(String)"
});
formatter.result({
  "duration": 121700,
  "status": "passed"
});
formatter.before({
  "duration": 6039271500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login  Details",
  "description": "",
  "id": "login-in-omayao-website;login--details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I visit the omayo website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter satya@gmail and 12345 in the fields",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be logged in on the basis of Fail",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_visit_the_omayo_website()"
});
formatter.result({
  "duration": 36100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "satya@gmail",
      "offset": 8
    },
    {
      "val": "12345",
      "offset": 24
    }
  ],
  "location": "Login.i_enter_and_in_the_fields(String,String)"
});
formatter.result({
  "duration": 286914800,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_login_button()"
});
formatter.result({
  "duration": 87532100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fail",
      "offset": 38
    }
  ],
  "location": "Login.i_should_be_logged_in_on_the_basis_of(String)"
});
formatter.result({
  "duration": 76000,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Searching of various categories should be possible along with product search",
  "description": "",
  "id": "searching-of-various-categories-should-be-possible-along-with-product-search",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I visit the website as a guest user",
  "keyword": "Given "
});
formatter.match({
  "location": "Search.i_visit_the_website_as_a_guest_user()"
});
formatter.result({
  "duration": 245900,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Search for the products under Books category",
  "description": "",
  "id": "searching-of-various-categories-should-be-possible-along-with-product-search;search-for-the-products-under-books-category",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I select the books option from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Search icon",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the books page loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see Books at Amazon as heading",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should not see other category products",
  "keyword": "But "
});
formatter.match({
  "location": "Search.i_select_the_books_option_from_the_dropdown()"
});
formatter.result({
  "duration": 127300,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_icon()"
});
formatter.result({
  "duration": 126100,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_books_page_loaded()"
});
formatter.result({
  "duration": 129500,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_books_at_amazon_as_heading()"
});
formatter.result({
  "duration": 133700,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_not_see_other_category_products()"
});
formatter.result({
  "duration": 149500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I visit the website as a guest user",
  "keyword": "Given "
});
formatter.match({
  "location": "Search.i_visit_the_website_as_a_guest_user()"
});
formatter.result({
  "duration": 107600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search for the products under Baby category",
  "description": "",
  "id": "searching-of-various-categories-should-be-possible-along-with-product-search;search-for-the-products-under-baby-category",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I select the Baby option from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Search icon",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the Baby page loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see The baby store as heading",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should not see other category products",
  "keyword": "But "
});
formatter.match({
  "location": "Search.i_select_the_baby_option_from_the_dropdown()"
});
formatter.result({
  "duration": 178600,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_icon()"
});
formatter.result({
  "duration": 119900,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_baby_page_loaded()"
});
formatter.result({
  "duration": 112500,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_baby_store_as_heading()"
});
formatter.result({
  "duration": 111500,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_not_see_other_category_products()"
});
formatter.result({
  "duration": 102500,
  "status": "passed"
});
});