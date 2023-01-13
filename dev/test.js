const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

const previousBlockHash = "N90ANS90N90ANID3C9D";
const currentBockData = [
  {
    amount: 10,
    sender: "NOIANS9ONQIANSDFN",
    recipient: "90NA90SNDFOAANSDFOON",
  },
  {
    amount: 30,
    sender: "09ANSOODFNABSDNF",
    recipient: "UIANSIUDFUIABSDUIFB",
  },
  {
    amount: 200,
    sender: "89ANS89DFN98ASNDF89",
    recipient: "AUSDF89ANSD9FNASD",
  },
];

const nonce = 100;

// console.log(bitcoin.hashBlock(previousBlockHash, currentBockData, nonce));
// console.log(bitcoin.proofOfWork(previousBlockHash, currentBockData));
console.log(bitcoin.hashBlock(previousBlockHash, currentBockData, 34214));
