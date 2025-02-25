// Select buttons and input fields
const multiplicationButton = document.getElementById('buttonggr');
const additionButton = document.getElementById('buttonAdd');
const subtractionButton = document.getElementById('buttonSub');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const inputNumber = document.getElementById('inputNumber');
const submitButton = document.getElementById('button1');
const viewTeamButton = document.getElementById('viewTeamButton');
const memberList = document.getElementById('memberList');

let correctAnswer; // Variable to store the correct answer

// Function to generate a random multiplication question
function randomizeMultiplication() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    correctAnswer = num1 * num2;
    questionElement.textContent = `What is ${num1} * ${num2}?`;
}

// Function to generate a random addition question
function randomizeAddition() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    correctAnswer = num1 + num2;
    questionElement.textContent = `What is ${num1} + ${num2}?`;
}

// Function to generate a random subtraction question
function randomizeSubtraction() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    correctAnswer = num1 - num2;
    questionElement.textContent = `What is ${num1} - ${num2}?`;
}

// Event listeners for question type selection
multiplicationButton.addEventListener('click', randomizeMultiplication);
additionButton.addEventListener('click', randomizeAddition);
subtractionButton.addEventListener('click', randomizeSubtraction);

// Event listener for submitting the answer
submitButton.addEventListener('click', () => {
    const userAnswer = parseInt(inputNumber.value);
    
    if (userAnswer === correctAnswer) {
        answerElement.textContent = "Correct!";
        answerElement.style.color = "green"; // Changed from CSS variable to direct color
        alert("Congratulations! Your answer is correct.");
    } else {
        answerElement.textContent = "Wrong answer. Try again!";
        answerElement.style.color = "red"; // Changed from CSS variable to direct color
    }
    
    inputNumber.value = ''; // Clear the input field after submission
});

// Function to show a centered popup menu with team members' names and matric numbers
function showPopupMenu() {
    let members = [
        { name: "Sam Sawami Ayenajeh", matric: "FT23CMP0095" },
        { name: "Samuel Angeles Ebini", matric: "FT23CMP0025" },
        { name: "Taimako Atagozawanyi", matric: "FT23CMP0036" }
    ];

    // Remove existing popup if it already exists
    let existingPopup = document.getElementById("popupMenu");
    if (existingPopup) {
        existingPopup.remove();
        return;
    }

    // Create overlay background for better UI experience
    let overlay = document.createElement("div");
    overlay.id = "popupOverlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "rgba(0, 0, 0, 0.5)"; // Dark background for focus effect
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "999"; // Ensure it's above other elements

    // Create the popup container
    let popup = document.createElement("div");
    popup.id = "popupMenu";
    popup.style.background = "white";
    popup.style.padding = "20px";
    popup.style.borderRadius = "12px"; // Rounded corners
    popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    popup.style.minWidth = "300px";
    popup.style.textAlign = "center";
    popup.style.fontFamily = "Arial, sans-serif";
    popup.style.position = "relative";

    // Title
    let title = document.createElement("h3");
    title.textContent = "Team Members";
    title.style.marginTop = "0";
    title.style.fontSize = "18px";
    title.style.color = "#333";

    // Generate the members list
    let list = document.createElement("ul");
    list.style.listStyle = "none";
    list.style.padding = "0";
    list.style.margin = "10px 0";

    members.forEach(member => {
        let listItem = document.createElement("li");
        listItem.style.margin = "5px 0";
        listItem.style.fontSize = "14px";
        listItem.innerHTML = `<strong>${member.name}</strong> - ${member.matric}`;
        list.appendChild(listItem);
    });

    // Close button
    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.marginTop = "15px";
    closeButton.style.padding = "8px 12px";
    closeButton.style.background = "#ff4d4d";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "6px";
    closeButton.style.cursor = "pointer";

    closeButton.addEventListener('click', () => {
        overlay.remove(); // Remove both popup and overlay
    });

    // Append elements
    popup.appendChild(title);
    popup.appendChild(list);
    popup.appendChild(closeButton);
    overlay.appendChild(popup);

    // Append to body
    document.body.appendChild(overlay);
}

// Event listener for showing the team popup
viewTeamButton.addEventListener('click', showPopupMenu);
