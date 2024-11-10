grades = {
    Alice: [100, 90, 80, 80, 40, 60],
    Bob: [60, 70, 80],
    Charlie: [80, 80, 80],
    Dave: [70, 70, 70],
    Eve: [60, 60, 60],
    Frank: [50, 50, 50],
    Gina: [40, 40, 40],
    Hannah: [30, 30, 30],
    Igor: [20, 20, 20],
    Jenny: [10, 10, 10],
  };

//   for (const key in grades) {
//     console.log(grades[key])
//   }

// grades.Vadim = [0, 0, 0]
// console.log(grades.Vadim)
// grades['Pavel'] = [100, 100, 100]
// console.log(grades['Pavel'])

// for (let i = 0; i < grades['Alice'].length; ++i) {
//     console.log(grades.Alice[i])
// }

// const str = 'hello world, ffff'
// console.log(str.split(' ').join('*'))
// console.log(str)

// const { Frank: friend } = grades
// console.log(friend)

// const hobbies = ['reading', 'tv', 'games'] //ll;;llllllll
// const [ reading, ...rest ] = hobbies
// const myHobbies = [ ... hobbies ];
// myHobbies.push('langs')
// console.log(myHobbies)
// console.log(hobbies)

const numbers = [10, 2, 7, 5, 1];

console.log(numbers.sort());

console.log(numbers.sort((a,b)=>a-b));