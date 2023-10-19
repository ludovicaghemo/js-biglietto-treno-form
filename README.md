## ASSIGNMENT

Write a program that asks the user for:

- The number of kilometers to travel
- Passenger's age

Based on this information, the program should calculate the total travel ticket price according to the following rules:

- The ticket price is defined based on kilometers (€0.21 per kilometer);
- A 20% discount should be applied for minors.
- A 40% discount should be applied for passengers over 65.

**MILESTONE 1:**
Let's start by implementing the program without any aesthetics: using only two inputs and a basic button (not stylized), we will follow the rules mentioned above. The final response (output) will be written in the console.

**MILESTONE 2:**
Only once Milestone 1 is complete and functioning, we will create a form on the page where the user can input the data and view the final calculation with the price. 
The data summary and the final price output should then be displayed on the page (the price should be formatted with a maximum of two decimal places to represent cents).

## Solution

### Data Collection
1. Get the user's name from the input;
2. Get the number of kilometers they want to travel from the input;
3. Get the user's age from the "select" menu.

### Program Logic
1. Prepare the result message to be printed, with the final ticket price to a maximum of two decimal places to indicate cents on the price; 
2. Cancel everything by clicking on the "CANCEL" button:  
    - Clear input data;
    - Clear result fields;
    - Hide the result section. 

### Output
1. Print the message to the page.
