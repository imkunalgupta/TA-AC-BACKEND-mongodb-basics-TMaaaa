db.cricket.insertMany(players);

db.football.insertMany(players);

db.TT.insertMany(players);
db.users.insert({
  name: 'User1',
  email: 'user1@gmail.com',
  age: 22,
  gender: 'male',
});

db.users.insertMany([
  {
    name: 'User1',
    email: 'user1@gmail.com',
    age: 22,
    gender: 'male',
  },
  {
    name: 'User2',
    email: 'u2@gmail.com',
    age: 23,
    gender: 'male',
  },
  {
    name: 'User3',
    email: 'u3@gmail.com',
    age: 26,
    gender: 'female',
  },
  {
    name: 'User4',
    email: 'u4@gmail.com',
    age: 22,
    gender: 'female',
  },
  {
    name: 'User5',
    email: 'u5@gmail.com',
    age: 25,
    gender: 'male',
  },
  {
    name: 'User6',
    email: 'user6@gmail.com',
    age: 25,
    gender: '$20k',
  },
]);

db.users.update({ name: 'User3' }, { $set: { email: 'user3@gmail.com' } });
db.users.update({ name: 'User4' }, { age: 29 });
db.users.update(
  { name: 'User8' },
  { age: 29, email: 'abc@gmail.com' },
  { upsert: true }
);
db.users.remove({ email: 'user6@gmail.com' });
