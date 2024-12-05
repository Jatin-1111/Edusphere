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
    let contentBlockContainer = document.querySelector('.content-block');

    if (semester && subject && chapter) {
        // Create the HTML content for the content block
        const newContentHTML = `
            <div class="content-info">
                <h3>Semester ${semester} - ${subject} - ${chapter}</h3>
                <p>
                    Here is the content for <strong>${chapter}</strong> from <strong>${subject}</strong> in Semester ${semester}.
                    You can access detailed notes, video lectures, and previous year question papers (PYQs) for better understanding.
                </p>
                <div class="card-container1">
                    <div class="card1">
                        <h4>YT Videos</h4>
                        <p>Watch curated video lectures for an in-depth understanding.</p>
                        <button class="card-button1"><a href="ytvideos.html">Click Here</a></button>
                    </div>
                    <div class="card1">
                        <h4>PYQs</h4>
                        <p>Access previous year question papers to boost exam preparation.</p>
                        <button class="card-button1"><a href="pyqs.html">Click Here</a></button>
                    </div>
                    <div class="card1">
                        <h4>Notes</h4>
                        <p>Get detailed notes to enhance your learning experience.</p>
                        <button class="card-button1"><a href="notes.html">Click Here</a></button>
                    </div>
                </div>
            </div>
        `;

        // If the content block already exists, replace its content
        if (contentBlockContainer) {
            // Remove the slide-down class to reset the animation
            contentBlockContainer.classList.remove('slide-down');

            // Update the content
            contentBlockContainer.innerHTML = newContentHTML;

            // Re-add slide-down class after a brief delay to trigger the animation again
            setTimeout(() => {
                contentBlockContainer.classList.add('slide-down');
            }, 10);
        } else {
            // If the content block does not exist, create and insert it
            contentBlockContainer = document.createElement("div");
            contentBlockContainer.classList.add('content-block');

            contentBlockContainer.innerHTML = newContentHTML;

            // Insert content-block after the button
            const itContainer = document.querySelector('.it-container');
            itContainer.insertAdjacentElement('afterend', contentBlockContainer);

            // Add slide-down class to trigger animation
            contentBlockContainer.classList.add('slide-down');
        }

        // Close the modal after displaying the content
        closeDialog();
    } else {
        alert("Please select semester, subject, and chapter.");
    }
}