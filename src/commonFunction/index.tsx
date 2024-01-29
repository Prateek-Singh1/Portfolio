export const scrollToSection = (sectionId: string, yOffset = 0) => {
    const element = document.getElementById(sectionId);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
};