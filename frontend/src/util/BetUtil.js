let crypto = require('crypto');

export const updateBet = (bet) => {
    return new Promise((resolve, reject) => {
        resolve(Number(bet))
    });
};

export const updateMulti = (multi) => {
    // Function used in promise callback to calculate odds
    const multiFunc = (multi) => {
        let pct = 100 / multi;
        let odds = (pct - pct * 0.01); // 1% house advantage
        let result = {
            multiplier: Number(multi),
            target: odds
        }
        return result
    };
    return new Promise((resolve, reject) => {
        resolve(multiFunc(multi))
    });
};

// NOT a promise. Placeholder function that returns roll
const handleBet = (data) => {
    let timestamp = Date.now();
    let nonce = (Math.random() * 100000).toFixed(0);

    //First hash seed + current time + math.random
    let resultHash = crypto.createHash('sha256').update(data.seed + '_' + timestamp + '_' + nonce).digest('hex');

    //Take first 10 bits of result hash
    resultHash = resultHash.substring(0,10);

    //Convert 10 hex bits to decimal
    let result = parseInt(resultHash, 16);

    //Take decimal mod 101
    result = result % 101;
    // Return object with necessary values for next function
    let resultData = {
        timestamp: timestamp,
        nonce: nonce,
        result: result
    }
    return resultData
};

const calculateResult = (data) => {
    let resultData = handleBet(data)

    if (resultData.result < data.target) {
        //Win
        let winState = {
            result: resultData.result,
            betAmount: data.betAmount,
            target: data.target,
            winnings: '$' + (Number(data.betAmount * data.multiplier).toFixed(2)),
            timestamp: resultData.timestamp,
            seed: data.seed,
            nonce: resultData.nonce,
            resultColor: "green",
            lastRoll: resultData.result,
            lastTarget: data.target,
        };
        return winState;
    } else {
        //Loss
        let loseState = {
            result: resultData.result,
            betAmount: data.betAmount,
            target: data.target,
            winnings: '- $' + (Number(data.betAmount).toFixed(2)),
            timestamp: resultData.timestamp,
            seed: data.seed,
            nonce: resultData.nonce,
            resultColor: "red",
            lastRoll: resultData.result,
            lastTarget: data.target,
        };
        return loseState;
    };
};

export const getResult = (data) => {
    return new Promise((resolve, reject) => {
        resolve(calculateResult(data))
    });
};
