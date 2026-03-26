// 1. Keyboard Accessibility for Sidebar Links
document.querySelectorAll('[role="button"]').forEach(button => {
    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            console.log(`Navigation item: ${button.textContent} activated via keyboard.`);
            alert(`Navigating to ${button.textContent}...`);
        }
    });
});

// 2. Search Feedback Logic
const searchInput = document.querySelector('input[placeholder="Search users..."]');
const searchStatus = document.getElementById('search-status');

if (searchInput && searchStatus) {
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value;
        
        if (value.length > 10) {
            searchStatus.style.display = 'block';
            searchStatus.textContent = `No results found for "${value}"`;
        } else {
            searchStatus.style.display = 'none';
        }
    });
}
