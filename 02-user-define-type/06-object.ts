// Object 

// Normal object

// let user : object;
// user={Name : 'khan zia'}
// console.log(user)

// let user1 : {userName : string , userId:number}
// user1 = {userName:'khan zia', userId:102}
// console.log(user1)



//Array of object

let user : object[];
user = [];

let user1 : {userName : string , userId:number}
user1 = {userName:'khan zia', userId:102}

user.push(user1)

let user2 : {userName : string , userId:number}
user2 = {userName:'Megha', userId:101}

user.push(user2)

// console.log(user)

// console.log(user[1])

for (const key in user) {
    // console.log(user[key]) // get all properties value
    console.log(user[key]['userName']) // get sapecific value
}