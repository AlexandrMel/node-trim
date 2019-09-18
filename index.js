const {formatString} = require("./formatting")
const {helpMessage} = require("./messaging")
let stringV = process.argv[2]
let array = process.argv
if(array.includes("--help")){
    helpMessage()
    formatString(stringV)
}
else {formatString(stringV);}