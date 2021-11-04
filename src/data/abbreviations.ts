/**
 * better https://www.logos.com/bible-book-abbreviations
 * https://github.com/TehShrike/books-of-the-bible/blob/master/index.json
 */
export const books = [{
  name: "Genesis",
  aliases: ["Gen"]
}, {
  name: "Exodus",
  aliases: ["Exod", "Ex", "Exo"]
}, {
  name: "Leviticus",
  aliases: ["Lev"]
}, {
  name: "Numbers",
  aliases: ["Num"]
}, {
  name: "Deuteronomy",
  aliases: ["Deut"]
}, {
  name: "Joshua",
  aliases: ["Josh"]
}, {
  name: "Judges",
  aliases: ["Judg"]
}, {
  name: "Ruth",
  aliases: []
}, {
  name: "1 Samuel",
  aliases: ["1 Sam", "1st Sam", "1st Samuel", "First Samuel"]
}, {
  name: "2 Samuel",
  aliases: ["2 Sam", "2nd Sam", "2nd Samuel", "Second Samuel"]
}, {
  name: "1 Kings",
  aliases: ["1 Kgs", "1st Kgs", "1st Kings", "First Kings"]
}, {
  name: "2 Kings",
  aliases: ["2 Kgs", "2nd Kgs", "2nd Kings", "Second Kings"]
}, {
  name: "1 Chronicles",
  aliases: ["1 Chr", "1st Chr", "1st Chronicles", "First Chronicles"]
}, {
  name: "2 Chronicles",
  aliases: ["2 Chr", "2nd Chr", "2nd Chronicles", "Second Chronicles"]
}, {
  name: "Ezra",
  aliases: ["Ezra"]
}, {
  name: "Nehemiah",
  aliases: ["Neh"]
}, {
  name: "Esther",
  aliases: ["Esth", "Est"]
}, {
  name: "Job",
  aliases: []
}, {
  name: "Psalms",
  aliases: ["Ps", "Psalm"]
}, {
  name: "Proverbs",
  aliases: ["Prov", "Pro"]
}, {
  name: "Ecclesiastes",
  aliases: ["Eccl", "Ecc"]
}, {
  name: "Song of Solomon",
  aliases: ["Song", "Song of Songs"]
}, {
  name: "Isaiah",
  aliases: ["Isa"]
}, {
  name: "Jeremiah",
  aliases: ["Jer"]
}, {
  name: "Lamentations",
  aliases: ["Lam"]
}, {
  name: "Ezekiel",
  aliases: ["Ezek"]
}, {
  name: "Daniel",
  aliases: ["Dan"]
}, {
  name: "Hosea",
  aliases: ["Hos"]
}, {
  name: "Joel",
  aliases: []
}, {
  name: "Amos",
  aliases: []
}, {
  name: "Obadiah",
  aliases: ["Obad", "Oba"]
}, {
  name: "Jonah",
  aliases: ["Jon"]
}, {
  name: "Micah",
  aliases: ["Mic"]
}, {
  name: "Nahum",
  aliases: ["Nah"]
}, {
  name: "Habakkuk",
  aliases: ["Hab"]
}, {
  name: "Zephaniah",
  aliases: ["Zeph"]
}, {
  name: "Haggai",
  aliases: ["Hag"]
}, {
  name: "Zechariah",
  aliases: ["Zech"]
}, {
  name: "Malachi",
  aliases: ["Mal"]
}, {
  name: "Matthew",
  aliases: ["Matt"]
}, {
  name: "Mark",
  aliases: []
}, {
  name: "Luke",
  aliases: []
}, {
  name: "John",
  aliases: []
}, {
  name: "Acts",
  aliases: []
}, {
  name: "Romans",
  aliases: ["Rom"]
}, {
  name: "1 Corinthians",
  aliases: ["1 Cor", "1st Cor", "1st Corinthians", "First Corinthians"]
}, {
  name: "2 Corinthians",
  aliases: ["2 Cor", "2nd Cor", "2nd Corinthians", "Second Corinthians"]
}, {
  name: "Galatians",
  aliases: ["Gal"]
}, {
  name: "Ephesians",
  aliases: ["Eph"]
}, {
  name: "Philippians",
  aliases: ["Phil"]
}, {
  name: "Colossians",
  aliases: ["Col"]
}, {
  name: "1 Thessalonians",
  aliases: ["1 Thess", "1st Thess", "1st Thessalonians", "First Thessalonians"]
}, {
  name: "2 Thessalonians",
  aliases: ["2 Thess", "2nd Thess", "2nd Thessalonians", "Second Thessalonians"]
}, {
  name: "1 Timothy",
  aliases: ["1 Tim", "1st Tim", "1st Timothy", "First Timothy"]
}, {
  name: "2 Timothy",
  aliases: ["2 Tim", "2nd Tim", "2nd Timothy", "Second Timothy"]
}, {
  name: "Titus",
  aliases: []
}, {
  name: "Philemon",
  aliases: ["Phlm"]
}, {
  name: "Hebrews",
  aliases: ["Heb"]
}, {
  name: "James",
  aliases: ["Jas"]
}, {
  name: "1 Peter",
  aliases: ["1 Pet", "1st Pet", "1st Peter", "First Peter"]
}, {
  name: "2 Peter",
  aliases: ["2 Pet", "2nd Pet", "2nd Peter", "Second Peter"]
}, {
  name: "1 John",
  aliases: ["1st John", "First John"]
}, {
  name: "2 John",
  aliases: ["2nd John", "Second John"]
}, {
  name: "3 John",
  aliases: ["3rd John", "Third John"]
}, {
  name: "Jude",
  aliases: ['Jud']
}, {
  name: "Revelation",
  aliases: ["Rev"]
}];


// https://gist.github.com/danott/615135
const booksYouVersion = {
  'gen': 'Genesis',
  'exo': 'Exodus',
  'lev': 'Leviticus',
  'num': 'Numbers',
  'deu': 'Deuteronomy',
  'jos': 'Joshua',
  'jdg': 'Judges',
  'rut': 'Ruth',
  '1sa': '1 Samuel',
  '2sa': '2 Samuel',
  '1ki': '1 Kings',
  '2ki': '2 Kings',
  '1ch': '1 Chronicles',
  '2ch': '2 Chronicles',
  'ezr': 'Ezra',
  'neh': 'Nehemiah',
  'est': 'Esther',
  'job': 'Job',
  'psa': 'Psalm',
  'pro': 'Proverbs',
  'ecc': 'Ecclesiastes',
  'sng': 'Song of Solomon',
  'isa': 'Isaiah',
  'jer': 'Jeremiah',
  'lam': 'Lamentations',
  'ezk': 'Ezekiel',
  'dan': 'Daniel',
  'hos': 'Hosea',
  'jol': 'Joel',
  'amo': 'Amos',
  'oba': 'Obadiah',
  'jon': 'Jonah',
  'mic': 'Micah',
  'nam': 'Nahum',
  'hab': 'Habakkuk',
  'zep': 'Zephaniah',
  'hag': 'Haggai',
  'zec': 'Zechariah',
  'mal': 'Malachi',
  'mat': 'Matthew',
  'mrk': 'Mark',
  'lke': 'Luke',
  'jhn': 'John',
  'act': 'Acts',
  'rom': 'Romans',
  '1co': '1 Corinthians',
  '2co': '2 Corinthians',
  'gal': 'Galatians',
  'eph': 'Ephesians',
  'php': 'Philippians',
  'col': 'Colossians',
  '1th': '1 Thessalonians',
  '2th': '2 Thessalonians',
  '1ti': '1 Timothy',
  '2ti': '2 Timothy',
  'tit': 'Titus',
  'phm': 'Philemon',
  'heb': 'Hebrews',
  'jas': 'James',
  '1pe': '1 Peter',
  '2pe': '2 Peter',
  '1jn': '1 John',
  '2jn': '2 John',
  '3jn': '3 John',
  'jud': 'Jude',
  'rev': 'Revelation'
}


//  https://gist.github.com/aaronshaf/7862132
const OSISBookAbbreviations = [
  'Gen','Exod','Lev','Nuv','Deut',
  'Josh','Judg','Ruth','1Sam','2Sam','1Kgs','2Kgs','1Chr','2Chr','Ezra','Neh','Esth',
  'Job','Ps','Prov','Eccl','Song',
  'Isa','Jer','Lam','Ezek',
  'Dan','Hos','Joel','Amos','Obad','Jonah','Mic','Nah','Hab','Zeph','Hag','Zech','Mal',
  'Matt','Mark','Luke','John',
  'Acts','Rom','1Cor','2Cor',
  'Gal','Eph','Phil','Col',
  '1Thess','2Thess','1Tim','2Tim','Titus','Phlm',
  'Heb','Jas','1Pet','2Pet','1John','2John','3John','Jud',
  'Rev'
]

// https://gist.github.com/mastastealth/cd5e12f6c0960408a3ac
export const bookNames = [
  'Genesis',         'Exodus',          'Leviticus',     'Numbers',
  'Deuteronomy',     'Joshua',          'Judges',        'Ruth',
  '1 Samuel',        '2 Samuel',        '1 Kings',       '2 Kings',
  '1 Chronicles',    '2 Chronicles',    'Ezra',          'Nehemiah',
  'Esther',          'Job',             'Psalm',         'Proverbs',
  'Ecclesiastes',    'Song of Solomon', 'Isaiah',        'Jeremiah',
  'Lamentations',    'Ezekiel',         'Daniel',        'Hosea',
  'Joel',            'Amos',            'Obadiah',       'Jonah',
  'Micah',           'Nahum',           'Habakkuk',      'Zephaniah',
  'Haggai',          'Zechariah',       'Malachi',       'Matthew',
  'Mark',            'Luke',            'John',          'Acts',
  'Romans',          '1 Corinthians',   '2 Corinthians', 'Galatians',
  'Ephesians',       'Philippians',     'Colossians',    '1 Thessalonians',
  '2 Thessalonians', '1 Timothy',       '2 Timothy',     'Titus',
  'Philemon',        'Hebrews',         'James',         '1 Peter',
  '2 Peter',         '1 John',          '2 John',        '3 John',
  'Jude',            'Revelation'
];

export const bookAbbreviations = OSISBookAbbreviations;
export const matchingBooks:string[] = [...bookAbbreviations, ...bookNames, ...Object.keys(booksYouVersion)];
