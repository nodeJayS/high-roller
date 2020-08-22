let crypto = require('crypto');

export const createSeed = () => {
    // Temp promise returning random seed
    return new Promise((resolve, reject) => {
        resolve(crypto.createHash('sha256').update(`${Date.now()}`).digest('hex'))
    });
};