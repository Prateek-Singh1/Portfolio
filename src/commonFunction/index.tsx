export const scrollToSection = (sectionId) => {
    let yOffset;
    if (sectionId === 'Home') {
        yOffset = -110;
    } else if (sectionId === 'Resume') {
        yOffset = -130;
    } else {
        yOffset = 0
    }
    const element = document.getElementById(sectionId);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
};