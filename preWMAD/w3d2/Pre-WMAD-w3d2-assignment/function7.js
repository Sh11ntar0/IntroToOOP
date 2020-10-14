// write a function that joins the array items together into one string, and log it to the console
let brokenSentence = ['I', 'am', 'a', 'broken', 'sentence'];



const joinSentence= function (arr) {
    let sentence = arr.join(' ')
    console.log(sentence)

};

joinSentence(brokenSentence);