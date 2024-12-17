document.addEventListener('DOMContentLoaded', function() {
  // i hope i did this correct 
  const printButton = document.getElementById('printPageButton');
  if (printButton) {
      printButton.addEventListener('click', function() {
          window.print();
      });
  }

  const readMoreBtns = document.querySelectorAll('.read-more-btn');

    // Add a click event listener to each button
    readMoreBtns.forEach(function(readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            // The full post related to this specific button
            const fullPost = readMoreBtn.nextElementSibling;

            // Toggle the 'hidden' class and adjust display based on its presence
            if (fullPost.classList.contains('hidden')) {
                fullPost.classList.remove('hidden');
                fullPost.style.display = 'block'; // Explicitly set display to block
                readMoreBtn.textContent = 'Hide Full Post';
            } else {
                fullPost.classList.add('hidden');
                fullPost.style.display = 'none'; // Explicitly set display to none
                readMoreBtn.textContent = 'Read Full Post...';
            }
        });
    });
});


  
