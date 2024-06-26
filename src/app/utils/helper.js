export const handleNavigation = (navigate, link) => {
  navigate(link);
  window.scrollTo({
    top: 0,
    // behavior: "smooth", // Optional: Add smooth scrolling behavior
  });
};
export function goToExternalSite() {
  window.open("https://marta-suchanska.uk2.cliniko.com/bookings", "_blank");
}
