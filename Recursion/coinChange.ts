function coinChange(curr : number , psf : string, coins: number[], target : number ){
  if(curr == target){
    console.log(psf);
    return
  }
  if(curr > target){
    return
  }
  for(let i = 0 ;  i < coins.length; i++){
    let coin = coins[i]
    coinChange(curr + coin , psf + coin + " , " , coins , target);
  }
}
coinChange(0 , "",[10,50,100,500],160)