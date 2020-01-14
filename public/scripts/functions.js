function shuffle(deck){
    var i = 0;
    var j = 0;
    var temp = null;

    for(i = deck.length - 1; i > 0; i-= 1){
        j = Math.floor(Math.random() * (i+1))
        temp = array[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}