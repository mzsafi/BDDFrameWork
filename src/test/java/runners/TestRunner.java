package runners;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import constants.ConfigFileReader;
import cucumber.api.CucumberOptions;
import cucumber.api.java.Before;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:Features", // Path to feature files.
		glue = { "stepDefinitions" }, // Path to step definitions.
		tags = { "@TekSchoolTest" }, // Tags to run on feature level or scenario level.
		dryRun = false, // Check if all the steps in feature file has steps in step definitions.
		monochrome = true, // Display the console output in readable way.
		strict = false, // if set to false will fail, if there are pending or undefined steps.
		format = { "html:target", "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html" })

public class TestRunner {

	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File(ConfigFileReader.getReportConfigPath()));
		Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
		Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
	}

}
