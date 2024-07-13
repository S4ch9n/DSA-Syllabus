function func(curr : number , psf : string , n : number){
  if(curr == n){
    console.log(psf)
    return;
  }if(curr > n) return;
  //1 Jump
  func(curr+1 , psf+1,n)
  //2 Jump
  func(curr+2 , psf+2,n)
  //3 Jump
  func(curr+3 , psf+3,n)
}
func(0,"",4)