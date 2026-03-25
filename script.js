document.querySelectorAll('[role="button"]').forEach(button => {
    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            alert('Navigation item clicked via keyboard!');
        }
    });
});
