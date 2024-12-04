// Get the modal
const modal = document.getElementById("selectionDialog");

// Function to open the dialog
function openDialog() {
    modal.style.display = "block";
}

// Function to close the dialog
function closeDialog() {
    modal.style.display = "none";
}

// Function to update subjects based on selected semester
function updateSubjects() {
    const semester = document.getElementById("semester").value;
    const subjectSelect = document.getElementById("subject");

    // Clear previous subjects
    subjectSelect.innerHTML = '<option value="" disabled selected>Choose a subject</option>';

    let subjects = [];

    if (semester === "1") {
        subjects = ["Applied Physics", "Calculus", "Workshop", "Programming Fundamental", "Professional Communication"];
    } else if (semester === "2") {
        subjects = ["Applied Chemistry", "Differential Equation and Transformation", "BEEE", "Engineering Graphics", "OOPS with C++"];
    }

    // Populate subjects based on selected semester
    subjects.forEach((subject) => {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });
}

// Function to handle form submission and display content
function submitForm() {
    const semester = document.getElementById("semester").value;
    const subject = document.getElementById("subject").value;
    const contentDisplay = document.getElementById("contentDisplay");

    if (semester && subject) {
        // Create content to display
        const contentHTML = `
      <div class="content-block">
        <h3>Semester ${semester} - ${subject}</h3>
        <p>
          Here is the content for <strong>${subject}</strong> from Semester ${semester}.
          You can access detailed notes, video lectures, and previous year question papers (PYQs) for better understanding.
        </p>
        <button class="card-button">Access Content</button>
      </div>
    `;

        // Display the content in the content display section
        contentDisplay.innerHTML = contentHTML;

        // Close the modal after displaying the content
        closeDialog();
    } else {
        alert("Please select both semester and subject.");
    }
}
