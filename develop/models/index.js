const { connection, User, Post, Comment } = require('../config/connection');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});
Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = { connection, User, Post, Comment };
