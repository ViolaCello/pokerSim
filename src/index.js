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

// Shuffle the deck

// Step one: Cut the deck

const cutTheDeck = deck => {
    // check that the deck(s) are a full 52 cards each
    let amountOfDecks = deck.length / 52
    if (deck.length % 52 != 0) {
        return ("This is not a full legal deck")
    } else {
 
        console.log (`There is/are ${amountOfDecks} full deck(s) here.`)
    }
    // like in real life, the cut of the deck is never exactly half
    let depthOfCut = Math.floor((Math.random() * 20) + (20)) * amountOfDecks 
    // create two piles of cards
    let leftPile = []
    let rightPile = []
    const createTwoPiles = cc => {
        if (depthOfCut !=0) {
            leftPile.push(cc.shift())
            depthOfCut--
            return createTwoPiles(cc)
        } else {
            deck.forEach(d => {
                rightPile.push(d)
            })
        }
        let result = []
        result.push(leftPile)
        result.push(rightPile)
        return result
    }
   return createTwoPiles(deck)
}

// Now that the deck is cut, we need to shuffle the cards back together (ie., merge)
// this will take in an array of the two halfs of the deck(s) we just cut
const combineHalfDecks = decks => {
    let combinedDecks = []
    while (decks[0].length !=0 && decks[1].length !=0) {
        let side = Math.round(Math.random()) // when shuffling a deck, there is never an even insertion of left and right, replicating it here
        combinedDecks.push(decks[side].shift()) 
    } 
    return combinedDecks.concat(decks[0]).concat(decks[1])
}

// go through a shuffling motion once
const shuffleCards = (deck) => {
    let cutD = cutTheDeck(deck)
    let shuffle = combineHalfDecks(cutD)
    return shuffle
}

// One function that goes through the sequence of creating a deck of cards, and shuffling them a random number of times between 3 and 9 times.

const createAndShuffleCards = () => {
    let cards = createDeck()
    // showCards(cards)
    let s = cards
    let n = Math.random() * (9 - 3 ) + 3;
    for (let i = 0; i<n; i++) {
      s = shuffleCards(s)
      console.log("In loop #", i+1)
        showCards(s)
    }
    return s
}

createAndShuffleCards();

function currentHandRank(hand, board) {
    let ranks = []
    let suit = []
    ranks.push(Object.keys(hand[0]),Object.keys(hand[1]))
    suit.push(Object.values(hand[0]),Object.values(hand[1]))
    
}