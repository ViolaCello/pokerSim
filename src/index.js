// create a deck of cards from scratch
const createDeck = () => {
    const ranks = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"]
    const suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
    let fullDeck = []
    ranks.forEach(rank => {
        suits.forEach(suit => {
            let newCard = {}
            newCard["rank"]=rank
            newCard["suit"]=suit
            fullDeck.push(newCard)
        })
    });
    return fullDeck
}

function showCards(cards) {
    cards.forEach(card => {
        console.log(card["rank"], card["suit"])
    })
}