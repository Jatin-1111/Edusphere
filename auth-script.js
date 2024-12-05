document.addEventListener('DOMContentLoaded', () => {
    // Get all required elements from the DOM
    const loginLink = document.getElementById('loginLink');
    const profileIcon = document.getElementById('profileIcon');
    const profileMenu = document.getElementById('profileMenu');
    const logoutButton = document.getElementById('logoutButton');
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    // Add check to ensure elements exist before attaching event listeners
    if (registerBtn && container) {
        // Register Button Click
        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });
    }

    if (loginBtn && container) {
        // Login Button Click
        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });
    }

    // Check if the user is logged in
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        // User is logged in, show profile icon and hide login link
        showUserProfileIcon(loggedInUser);
    }

    // Function to show user profile icon
    function showUserProfileIcon(userName) {
        if (loginLink && profileIcon) {
            // Hide login link
            loginLink.style.display = 'none';

            // Display profile icon with the user's initial
            profileIcon.textContent = userName.charAt(0).toUpperCase();
            profileIcon.style.display = 'flex';

            // Set up dropdown menu behavior
            profileIcon.addEventListener('click', () => {
                profileMenu.classList.toggle('show');
            });
        }

        // Set up logout functionality
        if (logoutButton) {
            logoutButton.addEventListener('click', (e) => {
                e.preventDefault();
                logoutUser();
            });
        }
    }

    // Function to handle logout
    function logoutUser() {
        if (profileIcon && loginLink) {
            // Clear user session from localStorage
            localStorage.removeItem('loggedInUser');

            // Hide profile icon and show login link
            profileIcon.style.display = 'none';
            if (profileMenu) {
                profileMenu.classList.remove('show');
            }
            loginLink.style.display = 'block';

            // Redirect to the homepage
            window.location.href = 'index.html';
        }
    }

    // Handle Sign In Form Submission
    const signinForm = document.querySelector('.sign-in form');
    if (signinForm) {
        signinForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent form from submitting normally

            const email = e.target.querySelector('input[placeholder="Email"]').value;
            const password = e.target.querySelector('input[placeholder="Password"]').value;

            try {
                // Simulate a login API call
                const response = await fetch('http://localhost:5000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const data = await response.json();
                if (response.status === 200) {
                    // Save logged in user in localStorage
                    localStorage.setItem('loggedInUser', data.name);

                    // Show user profile icon and hide login link
                    showUserProfileIcon(data.name);

                    // Redirect to the homepage
                    window.location.href = 'index.html';
                } else {
                    alert(data.error);
                }
            } catch (error) {
                console.error('Error during login:', error);
                alert('An error occurred during login.');
            }
        });
    }
});
