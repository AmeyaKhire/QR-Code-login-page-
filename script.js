// Hardcoded credentials
const hardcodedUsername = "Mayank";  // Hardcoded username
const hardcodedPassword = "90889"; // Hardcoded password

const hardcodedUsername1 = "Anant";  // Hardcoded username
const hardcodedPassword2 = "60718"; // Hardcoded password

const hardcodedUsername3= "Anil";  // Hardcoded username
const hardcodedPassword3 = "61178"; // Hardcoded password

const hardcodedUsername4 = "Vishwajeet";  // Hardcoded username
const hardcodedPassword4 = "60875"; // Hardcoded password

const hardcodedUsername5= "Kapoor";  // Hardcoded username
const hardcodedPassword5= "60624"; // Hardcoded password

const hardcodedUsername6 = "Prakash";  // Hardcoded username
const hardcodedPassword6= "60769"; // Hardcoded password

const hardcodedUsername7 = "Shudhanshu";  // Hardcoded username
const hardcodedPassword7 = "60726"; // Hardcoded password

const hardcodedUsername8 = "Snehal";  // Hardcoded username
const hardcodedPassword8 = "60830"; // Hardcoded password

const hardcodedUsername9 = "Krushna";  // Hardcoded username
const hardcodedPassword9 = "91637"; // Hardcoded password

const hardcodedUsername10 = "Aniket";  // Hardcoded username
const hardcodedPassword10 = "60847"; // Hardcoded password

const hardcodedUsername11 = "Abhijeet";  // Hardcoded username
const hardcodedPassword11 = "61306"; // Hardcoded password

const hardcodedUsername12= "Prashant";  // Hardcoded username
const hardcodedPassword12= "61310"; // Hardcoded password

const hardcodedUsername13 = "Gajanan";  // Hardcoded username
const hardcodedPassword13 = "61311"; // Hardcoded password

const hardcodedUsername14= "Paritosh";  // Hardcoded username
const hardcodedPassword14 = "61366"; // Hardcoded password

const hardcodedUsername15 = "Umesh";  // Hardcoded username
const hardcodedPassword15= "61355"; // Hardcoded password

const hardcodedUsername16= "Nilesh";  // Hardcoded username
const hardcodedPassword16= "61359"; // Hardcoded password

const hardcodedUsername17= "Shubham";  // Hardcoded username
const hardcodedPassword17= "60829"; // Hardcoded password

const hardcodedUsername18= "Man Prasad";  // Hardcoded username
const hardcodedPassword18= "61301"; // Hardcoded password

const hardcodedUsername19= "Sushil";  // Hardcoded username
const hardcodedPassword19= "60832"; // Hardcoded password

const hardcodedUsername20= "Amit";  // Hardcoded username
const hardcodedPassword20= "61426"; // Hardcoded password




// Function to login user
function loginUser() {
    const username = document.getElementById('loginUsername').value; // Get username input
    const password = document.getElementById('loginPassword').value; // Get password input

    // Check if the username and password match the hardcoded credentials
    if (username === hardcodedUsername && password === hardcodedPassword) {
        document.getElementById('userWelcome').innerText = username; // Display welcome message
        showWelcomeSection(); // Show the welcome section after successful login
    } else {
        alert("Invalid username or password."); // Alert for invalid credentials
    }

    return false; // Prevent form submission
}

// Function to show login form (not needed anymore as registration is removed)
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block'; // Show login form
}

// Function to show welcome section with the "Access Folder" button after successful login
function showWelcomeSection() {
    document.getElementById('loginForm').style.display = 'none'; // Hide login form
    document.getElementById('welcomeSection').style.display = 'block'; // Show welcome section
}

// Function to logout the user
function logout() {
    document.getElementById('welcomeSection').style.display = 'none'; // Hide welcome section
    showLoginForm(); // Show login form again
}

// Function to handle Access Folder button click (redirect to Google Drive)
function accessFolder() {
    window.open("https://drive.google.com/drive/u/0/folders/1T8af4kXNDTKq7sNU4mnKykNLdX5BO2FF", "_blank"); // Open Google Drive link
}
