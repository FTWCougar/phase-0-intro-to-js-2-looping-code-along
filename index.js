const gifts = [`teddy bear`, `drone`, `doll`];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

const cards = [];

function writeCards(name){
    for (let i = 0; i < name.length; i++){
        cards.splice(i, 0, `Thank you, ${name[i]}, for the wonderful surprise gift!`)
    }
    return cards;
}

function countDown(i){
    for(i; i >= 0; i--){
        console.log(i);
    }
}