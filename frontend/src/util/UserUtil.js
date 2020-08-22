 const user = (balance) => {
    let user = {
        balance: balance
    }
    return user
};

export const getUserData = () => {
    return new Promise((resolve, reject) => {
        resolve(user(1000)) // Hard-coded user balance $1000
    });
};

export const placeBet = (bet) => {
    return new Promise((resolve, reject) => {
        resolve(bet)
    });
};

export const winBet = (prize) => {
    return new Promise((resolve, reject) => {
        resolve(prize)
    });
};