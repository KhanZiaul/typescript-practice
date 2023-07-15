// type user = {userName : string , userId?:number} // optional chaining for create option user can put this value or not. Depend on user.
var users;
users = [];
var user1;
user1 = { userName: 'khan zia', userId: 102 };
users.push(user1);
var user2;
user2 = { userName: 'Megha', userId: 101 };
users.push(user2);
console.log(users);
var getRequest;
getRequest = "GET";
// console.log(getReuest)
function RequestUserValue(requestValue) {
    console.log(requestValue);
}
RequestUserValue("GET");
