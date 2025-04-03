// Navigate to security check
function navigateToHome() {
    window.location.href = "/home";
}

// Smooth scroll to "How It Works" section
function scrollToHowItWorks() {
    const howItWorksSection = document.querySelector('.how-it-works');
    if (howItWorksSection) {
        howItWorksSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Dark Mode Toggle
document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "🔆" : "🌙";
});

// Add click event listeners when document loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any other event listeners here
});
