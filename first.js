console.log("Sahu Jewellers website started!");

// Small entrance effect for catalogue links.
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.add('navigating');
        setTimeout(() => document.body.classList.remove('navigating'), 500);
    });
});
