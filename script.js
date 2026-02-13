document.addEventListener('DOMContentLoaded', function() {
  // Navbar hamburger functionality
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Close menu when clicking a link
    const navItems = navLinks.querySelectorAll('li');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  });

  // Footer visibility functionality
  const footer = document.querySelector('.footer');
  const scrollThreshold = 100; // Pixels from bottom to trigger
  let isFooterVisible = false;

  function toggleFooter() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const distanceFromBottom = documentHeight - (scrollPosition + windowHeight);

    if (distanceFromBottom < scrollThreshold && !isFooterVisible) {
      footer.classList.add('visible');
      isFooterVisible = true;
    } else if (distanceFromBottom >= scrollThreshold && isFooterVisible) {
      footer.classList.remove('visible');
      isFooterVisible = false;
    }
  }

  // Check immediately in case page is already scrolled
  toggleFooter();

  // Use requestAnimationFrame for smoother performance
  let isScrolling;
  window.addEventListener('scroll', function() {
    window.cancelAnimationFrame(isScrolling);
    isScrolling = window.requestAnimationFrame(toggleFooter);
  });

  // Also handle window resize
  window.addEventListener('resize', toggleFooter);

  // =========================
  // Social icons scroll hint
  // =========================
  const socialIcons = document.querySelector('.social-icons');
  const scrollHint = document.querySelector('.scroll-hint');

  if (socialIcons && scrollHint) {
    socialIcons.addEventListener('scroll', () => {
      scrollHint.style.display = 'none';
    }, { once: true });
  }
});
