module.exports.formatString = (str) => {
    let cleanStr = str.trimStart().trimEnd().replace(/\s\s+/g, ' ').split(" ")
    var result =""
   for(i =0; i< cleanStr.length;i++){
    // cleanStr[0][0].toUpperCase() + cleanStr[0].slice(1).toLowerCase() + " " + cleanStr[1][0].toUpperCase() + cleanStr[1].slice(1).toLowerCase()
    result += cleanStr[i][0].toUpperCase() + cleanStr[i].slice(1).toLowerCase() + " "
   }
   console.log(result);
}