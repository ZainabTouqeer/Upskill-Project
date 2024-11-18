<script>
  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-items a').forEach(anchor = {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Mobile menu toggle
  const contactBtn = document.querySelector('.btn-contact');
  const navItems = document.querySelector('.nav-items');
  
  contactBtn.addEventListener('click', () ={
    navItems.classList.toggle('show');
  });

  // "Book Now" Button Action
  const bookNowButton = document.querySelector('.btn');
  
  bookNowButton.addEventListener('click', () = {
    alert('Thank you for your interest! Our team will get in touch shortly.');
  });

  // Optional: Close menu on click (for mobile devices)
  document.querySelectorAll('.nav-items li a').forEach(navItem = {
    navItem.addEventListener('click', () => {
      if (navItems.classList.contains('show')) {
        navItems.classList.remove('show');
      }
    });
  });
</script>
