function writeCards(message,event) {
    const messageArray = []
    for (let i = 0; i < message.length; i++) {
        messageArray.push(`Thank you, ${message[i]}, for the wonderful ${event} gift!`)
    }
    return messageArray;
}
function countDown(intNum) {
    while (intNum >= 0) {
      console.log(intNum);
      intNum--;
    }
    return intNum;
  }
  countDown(10);