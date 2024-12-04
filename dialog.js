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
    } else if (semester === "3") {
        subjects = ["Linear Algebra and Probability", "Digital Electronics", "DBMS", "Data Structure", "Computer Architecture and Organisation"];
    } else if (semester === "4") {
        subjects = ["Economics", "Discrete Structure", "Computer Network", "Micro-Processor", "Operating System"];
    }

    // Populate subjects based on selected semester
    subjects.forEach((subject) => {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });

    // Clear chapter selection when subjects change
    updateChapters();
}

// Function to update chapters based on selected subject
function updateChapters() {
    const subject = document.getElementById("subject").value;
    const chapterSelect = document.getElementById("chapter");

    // Clear previous chapters
    chapterSelect.innerHTML = '<option value="" disabled selected>Choose a chapter</option>';

    let chapters = [];

    if (subject === "Applied Physics") {
        chapters = ["Oscillations", "Electromagnetic Waves", "Polarization", "Lasers and Optical Fibers"];
    } else if (subject === "Calculus") {
        chapters = ["Sequences and Series", "Differential Calculus", "Integral Calculus", "Vector Calculus"];
    } else if (subject === "Programming Fundamental") {
        chapters = ["Introduction to Programming", "Data Types", "Control Structures", "Functions"];
    }
    // Add other subjects and chapters accordingly...

    // Populate chapters based on selected subject
    chapters.forEach((chapter) => {
        const option = document.createElement("option");
        option.value = chapter;
        option.textContent = chapter;
        chapterSelect.appendChild(option);
    });
}

// Function to handle form submission and display content
function submitForm() {
    const semester = document.getElementById("semester").value;
    const subject = document.getElementById("subject").value;
    const chapter = document.getElementById("chapter").value;
    const contentDisplay = document.getElementById("contentDisplay");

    if (semester && subject && chapter) {
        // Create content to display
        const contentHTML = `
      <div class="content-block">
        <div class="content-info">
            <h3>Semester ${semester} - ${subject} - ${chapter}</h3>
            <p>
            Here is the content for <strong>${chapter}</strong> from <strong>${subject}</strong> in Semester ${semester}.
            You can access detailed notes, video lectures, and previous year question papers (PYQs) for better understanding.
            </p>
        </div>
        <div class="card-container1">
          <div class="card1">
            <h4>YT Videos</h4>
            <p>Watch curated video lectures for an in-depth understanding.</p>
            <button class="card-button1"><a href="">Click Here</a></button>
          </div>
          <div class="card1">
            <h4>PYQs</h4>
            <p>Access previous year question papers to boost exam preparation.</p>
            <button class="card-button1"><a href="">Click Here</a></button>
          </div>
          <div class="card1">
            <h4>Notes</h4>
            <p>Get detailed notes to enhance your learning experience.</p>
            <button class="card-button1"><a href="">Click Here</a></button>
          </div>
        </div>
      </div>
    `;

        // Display the content in the content display section
        contentDisplay.innerHTML = contentHTML;

        // Close the modal after displaying the content
        closeDialog();
    } else {
        alert("Please select semester, subject, and chapter.");
    }
}