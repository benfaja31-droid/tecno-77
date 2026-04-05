// Simple intersection observer to add a 'visible' class to elements on scroll
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    // Optional: Add simple fade-in tracking classes via JS later if needed
    // For now, the CSS primarily handles hover states and the layout
    // You could select elements like .service-card or .review-card to animate
});
