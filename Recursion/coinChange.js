function coinChange(curr, psf, coins, target) {
    if (curr == target) {
        console.log(psf);
        return;
    }
    if (curr > target) {
        return;
    }
    for (var i = 0; i < coins.length; i++) {
        var coin = coins[i];
        coinChange(curr + coin, psf + coin + " , ", coins, target);
    }
}
coinChange(0, "", [10, 50, 100, 500], 160);
