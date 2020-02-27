import users from './users.js';

console.log('Задание 1');

// Получить массив имен всех пользователей (поле name).

const getUserNames = users => {
    return users.map(user => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 
// 'Blackburn Dotson', 'Sheree Anthony' ]


console.log('Задание 2');

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => {
        return user.eyeColor === color;
    });
};

console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


console.log('Задание 3');

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
    const arrayUsersGender = users.filter(user => user.gender === gender);
    return arrayUsersGender.map(user => user.name);
};

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


console.log('Задание 4');

// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
    return users.filter(user => {
        return !user.isActive;
    });
};

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


console.log('Задание 5');

// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
    return users.find(user => {
        return user.email === email;
    });
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// {объект пользователя Elma Head}


console.log('Задание 6');

// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
    const arrUserAge = users.filter(user => {
        return user.age > min && user.age < max;
    });
    return arrUserAge;
};

console.log(getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


console.log('Задание 7');

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
    const totalBalance = users.reduce((acc, user) => {
        return acc + user.balance;
    }, 0);
    return `Oбщая сумма баланса: ${totalBalance}`;
};

console.log(calculateTotalBalance(users)); // 20916


console.log('Задание 8');

// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//     const includFriendName = users.filter(user => {
//         return user.friends.includes(friendName);
//     });
//     return includFriendName.map(user => user.name);
// };

const getUsersWithFriend = (users, friendName) => {
    const result = users
        .filter(user => {
            return user.friends.includes(friendName);
        })
        .map(user => user.name);
    return result;
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]


console.log('Задание 9');

// Массив имен (поле name) людей, отсортированных в зависимости от 
// количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
    const arraySort = users.sort(
        (prev, next) => prev.friends.length - next.friends.length,
    );
    return arraySort.map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr',
// 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

console.log('Задание 10');

// Получить массив всех умений всех пользователей (поле `skills`), при этом не
// должно быть повторяющихся умений и они должны быть отсортированы в алфавитном
// порядке.


const getSortedUniqueSkills = users => {
    const allSkills = [];
    const result = [];
    users.forEach(user => allSkills.push(...user.skills));
    allSkills.forEach(user => {
        if (result.includes(user)) {
            return false;
        };
        result.push(user);
    });
    return result.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex',
// 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 
// 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
