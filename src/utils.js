export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  console.log(element);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
