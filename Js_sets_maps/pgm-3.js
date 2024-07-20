// Assuming countries is structured like this
const countries = [
    { name: 'Finland', languages: ['Finnish', 'Swedish'] },
    { name: 'Sweden', languages: ['Swedish'] },
    { name: 'Norway', languages: ['Norwegian'] }
    // Add more countries as needed
];

function countLanguages(countries) {
    const languageSet = new Set();
    countries.forEach(country => {
        country.languages.forEach(language => {
            languageSet.add(language);
        });
    });
    return languageSet.size;
}

const languageCount = countLanguages(countries);
console.log("Number of languages in countries:", languageCount);


function mostSpokenLanguages(countries, n) {
    const languageMap = new Map();
    
    // Count occurrences of each language
    countries.forEach(country => {
        country.languages.forEach(language => {
            if (languageMap.has(language)) {
                languageMap.set(language, languageMap.get(language) + 1);
            } else {
                languageMap.set(language, 1);
            }
        });
    });
    
    // Sort languages by frequency in descending order
    const sortedLanguages = [...languageMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, n)
        .map(([language, count]) => ({ [language]: count }));
    
    return sortedLanguages;
}

// Examples of usage
console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));
