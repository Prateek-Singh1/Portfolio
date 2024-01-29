export const scrollToSection = (sectionId: string, yOffset = 0) => {
    const element = document.getElementById(sectionId);

    if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });

        const newUrl = `${window.location.pathname}#${sectionId}`.replace(/%| /g, '-').toLowerCase(); // Remove both '%' and spaces from the URL
        window.history.pushState({ path: newUrl }, '', newUrl);

    }
};
