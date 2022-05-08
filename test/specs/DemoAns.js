function myFunction(p1, p2) {

    res = "Mainak"
   
    for (let i = 0; i < 5; i++) {
        
        res = i*p1*p2;
        //console.log(res)
        return res;
      }
  }

  let user = myFunction(2, 3)
  console.log(user)