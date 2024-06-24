export const handleNavigation = (navigate, link) => {
  navigate(link);
  window.scrollTo({
    top: 0,
    // behavior: "smooth", // Optional: Add smooth scrolling behavior
  });
};
