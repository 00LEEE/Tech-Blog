const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = [
  {
    username: 'TestUser1',
    password: 'testPassword1',
  },
  {
    username: 'TestUser2',
    password: 'testPassword2',
  },
];

const postData = [
  {
    title: 'Test Post 1',
    content: "This is a test post for User 1.",
    userId: 1,
  },
  {
    title: 'Test Post 2',
    content: 'This is a test post for User 2.',
    userId: 2,
  },
];

const commentData = [
  {
    content: 'This is a test comment for Post 1 by User 1.',
    userId: 1,
    postId: 1,
  },
  {
    content: 'This is a test comment for Post 2 by User 2.',
    userId: 2,
    postId: 2,
  },
  {
    content: 'This is another test comment for Post 1 by User 1.',
    userId: 1,
    postId: 1,
  },
  {
    content: 'This is another test comment for Post 2 by User 2.',
    userId: 2,
    postId: 2,
  },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Promise.all(userData.map(user => User.create(user, {
    individualHooks: true,
  })));

  await Promise.all(postData.map(post => Post.create(post)));

  await Promise.all(commentData.map(comment => Comment.create(comment)));

  process.exit(0);
};

seedDatabase();

