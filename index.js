// Write your solution in this file!
// 1. Declare customerName to be bob in global scope
var customerName = 'bob';

// 2. Create upperCaseCustomerName function to modify the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Create setBestCustomer function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 4. Create overwriteBestCustomer function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Create changeLeastFavoriteCustomer function to unsuccessfully try to reassign leastFavoriteCustomer
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will cause an error
};
