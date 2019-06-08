package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage {

	
	public RegisterPage(WebDriver driver) {
		PageFactory.initElements(driver, this);

	}
	
	@FindBy(how = How.XPATH, using = "//input[@name='firstname']")
	private WebElement firstName;
	
	
	@FindBy(how = How.XPATH, using = "//input[@name='lastname']")
	private WebElement lastName;
	
	
	@FindBy(how = How.XPATH, using = "//input[@id='input-email']")
	private WebElement emailField;
	
	
	@FindBy(how = How.XPATH, using = "//input[@id='input-telephone']")
	private WebElement telephoneNumber;
	
	
	@FindBy(how = How.XPATH, using = "//input[@name='password']")
	private WebElement passField;
	
	
	@FindBy(how = How.XPATH, using = "//input[@id='input-confirm']")
	private WebElement passConfirmField;
	
	
	@FindBy(how = How.XPATH, using = "(//input[@type='radio' and @value='1'])[2]")
	private WebElement yesRadioButton;
	
	
	@FindBy(how = How.XPATH, using = "//input[@type='checkbox']")
	private WebElement privacyPolicyCheckbox;
	
	
	@FindBy(how = How.XPATH, using = "//input[@type='submit']")
	private WebElement continueButton;
}
