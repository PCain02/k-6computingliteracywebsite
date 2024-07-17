document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.listing-filters .categories .category');
    
    categories.forEach(category => {
        category.addEventListener('click', function () {
            // Remove 'selected' class from all categories
            categories.forEach(cat => cat.classList.remove('selected'));
            
            // Add 'selected' class to the clicked category
            this.classList.add('selected');
        });
    });
});
