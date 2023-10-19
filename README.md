## ASSIGNMENT

Write a program that asks the user for:

- The number of kilometers to travel
- Passenger's age

Based on this information, the program should calculate the total travel ticket price according to the following rules:

- The ticket price is defined based on kilometers (€0.21 per kilometer);
- A 20% discount should be applied for minors.
- A 40% discount should be applied for passengers over 65.

## Solution

### Data Collection
1. Initialization of the data variable we have available:
    - Under 18 discount (20%)
    - Over 65 discount (40%)
    - Ticket price per kilometer (0.21€/Km)
2. Get the user's name from the input;
3. Get the number of kilometers they want to travel from the input;
4. Get the user's age from the "select" menu.

### Program Logic
1. Prepare the result message to be printed, with the final ticket price to a maximum of two decimal places to indicate cents on the price; 
2. Cancel everything by clicking on the "CLEAR" button:  
    - Clear input data;
    - Clear result fields;
    - Hide the result section. 

### Output
1. Print the message to the page.
