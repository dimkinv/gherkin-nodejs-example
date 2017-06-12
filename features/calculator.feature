Feature: Calulator 
    As a user of Calulator I would like to be able to run calculations

 Scenario Outline: Calculator <operator> operation
    When I execute <arg1> <operator> <arg2> the result should be <result>
    Examples:
    |arg1|operator|arg2|result|
    | 1  |    +   |  2 |  3   |
    | 1  |    -   |  2 |  -1  |
    | 1  |    *   |  2 |  2   |
    | 1  |    /   |  2 | 0.5  |