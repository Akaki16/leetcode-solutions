const maximumWealth = function(accounts) {
    const wealth = [];

    for (let account of accounts) {
        const totalMoney = sum(account);
        wealth.push(totalMoney);
    }

    return Math.max(...wealth);
};

function sum(account) {
    let total = 0;

    for (let money of account) {
        total += money;
    }

    return total;
}

console.log(maximumWealth([[1,2,3],[3,2,1]]));