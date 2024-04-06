function simpleMessage(msg) {
    console.log(msg)
}

function complexMessage(msg) {
    console.log(new Date() + ":" +msg)
}

export default { complexMessage, simpleMessage}
