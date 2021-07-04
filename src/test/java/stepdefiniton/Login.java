package stepdefiniton;

	import org.junit.runner.RunWith;
	import org.openqa.selenium.By;
	import org.openqa.selenium.WebDriver;
	import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
	import cucumber.api.java.en.Given;
	import cucumber.api.java.en.Then;
	import cucumber.api.java.en.When;
	import cucumber.api.junit.Cucumber;
	import io.github.bonigarcia.wdm.WebDriverManager;

	@RunWith(Cucumber.class)
	public class Login {
		
		WebDriver driver;
		
		@Before("@login")
		public void setup() {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
			driver.manage().window().maximize();
			driver.get("http://omayo.blogspot.com/");
			
		}

		@Given("^I visit the omayo website$")
		public void i_visit_the_omayo_website(){
			
	
			
		}

		@When("^I enter (.+) and (.+) in the fields$")
		public void i_enter_and_in_the_fields(String username, String password) {
			driver.findElement(By.name("userid")).sendKeys(username);
			
			driver.findElement(By.name("pswrd")).sendKeys(password);
			
		}

		@Then("^I should be logged in on the basis of (.+)$")
		public void i_should_be_logged_in_on_the_basis_of(String loginstatus) {
			
		}

		@And("^I click the login button$")
		public void i_click_the_login_button() {
			
			driver.findElement(By.cssSelector("input[value='Login']")).click();
		}
		
		@After("@Login")
		public void closure() {
			driver.close();
		}

	}

