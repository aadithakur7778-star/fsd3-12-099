// We use in memory database
let users = [
    {id:1, name: "Aadi Thakur",mob:'8810xxxxxx', email: "aditya@example.com"},
    {id:2, name: "Aditya", mob:'8090xxxxxx', email: "example@example.com"}
];

let nextId = 3;

export const getUsers = () => users;
const getAllUsers =()=>{
    return users;
}
export const getUsersById =(pid)=>{
    const found= users.find((user)=>user.id===pid)
    return found;
};


export const addUser = (user) => {
    user.id = nextId++;
    users.push(user);
    return user;
};
export const updateUser = (pid, updateData) => {
  const index = users.findIndex((user) => user.id === pid);
  if (index == -1) {
    return false;
  }
  updateData.id=pid;
  users[index]=updateData;
  return updateData;
};
 export const deleteUser=(pid)=>{
    const index = users.findIndex((user)=> user.id===pid);
    if(index==-1){
        return false;
    }
    users.splice(index,1);

}

//users.js 


// // we use in memory database
// let users = [
//   {
//     id: 1,
//     name: "Amit Sharma",
//     mob: "98345xxxxx",
//     email: "amit.example@exam.com",
//   },
//   {
//     id: 2,
//     name: "Monika Verma",
//     mob: "92345xxxxx",
//     email: "moni.example@exam.com",
//   },
// ];

// let nextId = 3;

// export const getUsers = () => users;

// export const addUser = (user)=>{
//   user.id = nextId++;
//   users.push(user);
//   return user;
// };