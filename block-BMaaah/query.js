db.articles.insertMany(articles);
db.articles.findOne({ 'author.name': 'abc' });
db.articles.update(
  { _id: ObjectId('63354fbf3ecca3e081c49526') },
  { $set: { title: 'my First code for advance css' } }
);
db.articles.update(
  { title: 'my First code for mongo' },
  { $set: { 'author.name': 'abcde' } }
);
