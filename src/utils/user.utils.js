export const initUsers = [
    {name: "John", id: 1},
    {name: "Paul", id: 2},
    {name: "Robert", id: 3},
]

export const additionalUsers = [
    {name: "Josh", id: 4},
    {name: "Stephen", id: 5},
    {name: "George", id: 6},
    {name: "Samuel", id: 7},
]

export const getId = (users) => users.reduce((id, user) => user.id > id ? user.id : id, 0) + 1
