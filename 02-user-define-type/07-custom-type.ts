// type user = {userName : string , userId?:number} // optional chaining for create option user can put this value or not. Depend on user.

type user = {userName : string , userId:number} 

let users : user[];
users = [];

let user1 : user
user1 = {userName:'khan zia', userId:102}
users.push(user1)

let user2 :user
user2 = {userName:'Megha', userId:101}
users.push(user2)

console.log(users)


type RequestType = "GET" | "POST"

let getRequest:RequestType;
getRequest= "GET"

// console.log(getReuest)

function RequestUserValue(requestValue : RequestType){
    console.log(requestValue)
}

RequestUserValue("GET")