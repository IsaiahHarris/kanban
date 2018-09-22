const bookshelf = require('./bookshelf');
require('./Priorities');
require('./Statuses');
require('./User');
class Card extends bookshelf.Model {
  get tableName() {
    return 'cards';
  }
  get hasTimestamps() {
    return true;
  }

  created() {
    return this.hasOne('User', 'id', 'created_by');
  }

  assigned() {
    return this.hasOne('User', 'id', 'assigned_to');
  }

  status() {
    return this.hasOne('Statuses', 'id', 'status_id');
  }
  priority() {
    return this.hasOne('Priorities', 'id', 'priority_id');
  }
}

module.exports = bookshelf.model('Card', Card);
