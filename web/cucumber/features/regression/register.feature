Feature: Chai page

    Scenario Outline: Test chai form
        Given user is on practice page "https://demoqa.com/automation-practice-form"
        Then page header text is "Practice Form"
        When enter firstname <fname> and lastname <lname>
        And select gender <gender> years <yrs> favorite chai <favchai> and reason <reason>
        And select continent <continent> and commands <command>
        And click on submit button
        Then page header text is "We're passionate about tea."
        
        Examples:
            | fname | lname  | gender | yrs | favchai | reason             | continent | command       |
            | Emma  | watson | Female | 6   | Red Tea | Harmless Addiction | Europe    | Wait Commands |