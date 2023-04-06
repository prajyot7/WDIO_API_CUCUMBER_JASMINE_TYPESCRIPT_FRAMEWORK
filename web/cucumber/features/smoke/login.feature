Feature: The Internet Guinea Pig Website

  Scenario Outline:user, can log into the secure area

    Given user is on the login page
    When enter <username> and <password>
    Then validate flash message <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |

  Scenario Outline:verify invalid login scenario

    Given user is on the login page
    When enter <username> and <password>
    Then validate flash message <message>

    Examples:
      | username | password | message                  |
      | tomsmith | barfoo!  | You password is invalid! |
