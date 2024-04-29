function sentence(letters){
    var firstLetter = letters.charAt(0).toLowerCase();
    var lastLetter = letters.charAt(letters.length - 1).toLowerCase();
    if (firstLetter === 'p') {
        letters = letters.substring(1);
    }
    if (lastLetter === 'p') {
        letters = letters.substring(0, letters.length - 1);
    }
    return letters;
}

var enter = 'Pagrindas maistap';
var result = sentence(enter);
console.log('Zodis:', enter);
console.log('Rezultatas:', result);

