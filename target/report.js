$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolTest.feature");
formatter.feature({
  "line": 2,
  "name": "Tek School Test",
  "description": "",
  "id": "tek-school-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    }
  ]
});
formatter.before({
  "duration": 7920938991,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 14555303983,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_click_on_test_environment()"
});
formatter.result({
  "duration": 2555787523,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login to test environment",
  "description": "",
  "id": "tek-school-test;login-to-test-environment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@loginTest"
    },
    {
      "line": 8,
      "name": "@smoketest"
    },
    {
      "line": 8,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User see  test environment page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User verify test environment title",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_see_test_environment_page()"
});
formatter.result({
  "duration": 880347265,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_verify_test_environment_title()"
});
formatter.result({
  "duration": 11894301,
  "status": "passed"
});
formatter.after({
  "duration": 810706016,
  "status": "passed"
});
formatter.before({
  "duration": 3871838930,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4341639174,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_click_on_test_environment()"
});
formatter.result({
  "duration": 3297960289,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to My Account",
  "description": "",
  "id": "tek-school-test;login-to-my-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@loginPage"
    },
    {
      "line": 13,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_myAccount()"
});
formatter.result({
  "duration": 366701560,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 710958562,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_should_see_login_page()"
});
formatter.result({
  "duration": 507372311,
  "status": "passed"
});
formatter.after({
  "duration": 957472533,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Testing login with different use and password",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-use-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username \u003cuserName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-use-and-password;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 30,
      "id": "tek-school-test;testing-login-with-different-use-and-password;;1"
    },
    {
      "cells": [
        "test001@test.com",
        "test001"
      ],
      "line": 31,
      "id": "tek-school-test;testing-login-with-different-use-and-password;;2"
    },
    {
      "cells": [
        "test002@test.com",
        "test002"
      ],
      "line": 32,
      "id": "tek-school-test;testing-login-with-different-use-and-password;;3"
    },
    {
      "cells": [
        "test003@test.com",
        "test003"
      ],
      "line": 33,
      "id": "tek-school-test;testing-login-with-different-use-and-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3672774273,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 5273467888,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1870522910,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Testing login with different use and password",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-use-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username test001@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password test001",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_myAccount()"
});
formatter.result({
  "duration": 275869406,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 508035059,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_should_see_login_page()"
});
formatter.result({
  "duration": 572308023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test001@test.com",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.user_enter_username_test_test_com(String)"
});
formatter.result({
  "duration": 2215449764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test001",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.user_enter_password_test(String)"
});
formatter.result({
  "duration": 2155153671,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.click_continue_button()"
});
formatter.result({
  "duration": 2825622346,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 2349560156,
  "status": "passed"
});
formatter.after({
  "duration": 841029716,
  "status": "passed"
});
formatter.before({
  "duration": 3851467081,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4738447729,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1487115329,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Testing login with different use and password",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-use-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username test002@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password test002",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_myAccount()"
});
formatter.result({
  "duration": 679334238,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 679136480,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_should_see_login_page()"
});
formatter.result({
  "duration": 577722489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test002@test.com",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.user_enter_username_test_test_com(String)"
});
formatter.result({
  "duration": 2215638443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test002",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.user_enter_password_test(String)"
});
formatter.result({
  "duration": 2119848125,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.click_continue_button()"
});
formatter.result({
  "duration": 2821211275,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 2378200346,
  "status": "passed"
});
formatter.after({
  "duration": 734327571,
  "status": "passed"
});
formatter.before({
  "duration": 3800921924,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 5880238715,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1533736902,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Testing login with different use and password",
  "description": "",
  "id": "tek-school-test;testing-login-with-different-use-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 19,
      "name": "@test001"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enter username test003@test.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter password test003",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_myAccount()"
});
formatter.result({
  "duration": 343673991,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 929887053,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_should_see_login_page()"
});
formatter.result({
  "duration": 640835353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test003@test.com",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.user_enter_username_test_test_com(String)"
});
formatter.result({
  "duration": 2159903024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test003",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.user_enter_password_test(String)"
});
formatter.result({
  "duration": 2177316000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.click_continue_button()"
});
formatter.result({
  "duration": 2577233423,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 2426760027,
  "status": "passed"
});
formatter.after({
  "duration": 730334910,
  "status": "passed"
});
});