function sortByTitle(a, b, lang) {
    lang = lang || 'en';
    let title1 = a.title[lang].trim().toLowerCase();
    let title2 = b.title[lang].trim().toLowerCase();
    return title1 < title2 ? -1 : title1 > title2 ? 1 : 0;
}

function sortById(a, b, lang) {
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
}