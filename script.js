// 1a
const jPDinos = [
    "Velociraptors",
    "Tyrannosaurus Rex",
    "Dilophosaurus"
]

// 1b
function seeDinos(d1, d2, ...d3){
    console.log(d1);
    console.log(d2);
    console.log(d3);
}

seeDinos(...jPDinos);

// 2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

seeCharacters = (char) => {
    console.log(char.ellieSattler);
};

seeCharacters(jPCharacters);

// BONUS
// 3a
const jurassicParkMovies = [
    {
        one:  "Jurassic Park", 
        two: "The Lost World: Jurassic Park",
        three: "Jurassic Park III"
    }, 
    {
        four: "Jurassic World",
        five: "Jurassic World: Fallen Kingdom",
        six: "Jurassic World: Dominion"
    }
];

// 3b
function seeJPMovies({one, two, three}, {four, five, six}){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
};

seeJPMovies(...jurassicParkMovies);