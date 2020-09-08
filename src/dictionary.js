class Dictionary {
    constructor() {
        this.words = []
    }

    randomize() {
        const randomIdx = Math.floor(Math.random() * this.words.length)
        return this.words[randomIdx]
    }

};


export default Dictionary;