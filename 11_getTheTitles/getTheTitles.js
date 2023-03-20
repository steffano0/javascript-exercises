const getTheTitles = function(stand) {
    return stand.reduce((titles, book) => {
        
        titles.push(book.title);
        return titles;
        
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
