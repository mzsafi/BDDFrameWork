package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import constants.ConfigFileReader;

public class TestEnvironmentPage extends ConfigFileReader{

	//1. Extend the base class.
	//2. Create a constructor for this class.
	public TestEnvironmentPage() {
		PageFactory.initElements(driver, this);

	}

	@FindBy(how = How.XPATH, using = "//span[text() = 'My Account']")
	private WebElement myAccount;

	@FindBy(how = How.XPATH, using = "//a[text() = 'Register']")
	private WebElement register;

	@FindBy(how = How.XPATH, using = "//a[text() = 'Login']")
	private WebElement login;

	@FindBy(how = How.XPATH, using = "//input[@id='input-email']")
	private WebElement email;

	@FindBy(how = How.XPATH, using = "//input[@id='input-password']")
	private WebElement password;

	@FindBy(how = How.XPATH, using = "//input[@class='btn btn-primary']")
	private WebElement loginButton;

	public void clickOnMyAccount() {
		myAccount.click();
	}

	public void clickOnRegister() {
		register.click();
	}

	public void clickOnLogin() {
		login.click(); 
	} 
	
	public String getPageURL() {
		String actualURL = driver.getCurrentUrl();
		return actualURL;
	}
	
	public String getPageTitle() {
		String pageTitle = driver.getTitle();
		return pageTitle;
	}
	/**
	 * This method send email address to email field.
	 * @param emailAddress
	 */
	public void enterEmail(String emailAddress) {
		email.sendKeys(emailAddress);
		
	}
	/**
	 * This method sends password to the password field.
	 * @param passwordData
	 */
	public void enterPassword(String passwordData) {
		password.sendKeys(passwordData);
		
	}
	/**
	 * This method click on login button.
	 */
	public void clickOnLoginButton() {
		loginButton.click();
	}
	
	
}
