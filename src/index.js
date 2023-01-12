module.exports = function toReadable (number) {
    switch (number) {
        case 10: return "ten"
        case 11: return "eleven";
        case 12: return "twelve";
        case 13: return "thirteen";
        case 14: return "fourteen"; 
        case 15: return "fifteen";
        case 16: return "sixteen";
        case 17: return "seventeen";
        case 18: return "eighteen";
        case 19: return "nineteen";
    }
    
    let digit = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let dozens = [ 'twenty', 'thirty', 'fourty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let numberString = number.toString();
    let dec = numberString.length;
    
    if (dec == 1) {
        return digit[number];
    }


}