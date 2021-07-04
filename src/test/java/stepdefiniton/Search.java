package stepdefiniton;

	import cucumber.api.java.en.And;
	import cucumber.api.java.en.But;
	import cucumber.api.java.en.Given;
	import cucumber.api.java.en.Then;
	import cucumber.api.java.en.When;

	public class Search {
		
		    @Given("^I visit the website as a guest user$")
		    public void i_visit_the_website_as_a_guest_user() {
		       System.out.println("method 1");
		    }

		    @When("^I select the books option from the dropdown$")
		    public void i_select_the_books_option_from_the_dropdown(){
		       System.out.println("method 2");
		    }

		    @When("^I select the Baby option from the dropdown$")
		    public void i_select_the_baby_option_from_the_dropdown() {
		       System.out.println("method 3");
		    }

		    @Then("^I should see the books page loaded$")
		    public void i_should_see_the_books_page_loaded()  {
		       System.out.println("method 4");
		    }

		    @Then("^I should see the Baby page loaded$")
		    public void i_should_see_the_baby_page_loaded()  {
		      System.out.println("method 5");
		    }

		    @And("^I click on Search icon$")
		    public void i_click_on_search_icon() {
		     System.out.println("method 6");
		    }

		    @And("^I should see Books at Amazon as heading$")
		    public void i_should_see_books_at_amazon_as_heading() {
		    System.out.println("method 7");
		    }

		    @And("^I should see The baby store as heading$")
		    public void i_should_see_the_baby_store_as_heading() {
		     System.out.println("method 8");
		    }

		    @But("^I should not see other category products$")
		    public void i_should_not_see_other_category_products() {
		        System.out.println("mehtod 9");
		    }

	}



