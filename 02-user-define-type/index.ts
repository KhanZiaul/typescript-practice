// let userId : string | number | boolean ;
let userId : (string | number | boolean) ;

userId='101';
userId=101;
userId=true;

function displayUserId(id:number|string|boolean){
    console.log(id)
}

displayUserId(101)
displayUserId('101')
displayUserId(true)