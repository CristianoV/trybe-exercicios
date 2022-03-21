const person1 = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const {nationality = 'Brasileiro Nato' } = person1;
  
  console.log(nationality);
  console.log(person1);

  const getNationality = ({ name, lastName, nationality = 'Brazilian' }) => `${name} ${lastName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

// const { nationality = 'Brazilian'} = person;

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// console.log(nationality);
// const {firstName} = person
// console.log({firstName});

console.log(getNationality(person1));