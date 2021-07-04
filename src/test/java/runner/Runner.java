package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin={"html:target/cucumber_report.html", "pretty"}, features = "features",glue = "stepdefiniton")
public class Runner {
	
	

}
