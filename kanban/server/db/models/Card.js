const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model{
  get tableName(){
    return 'cards'
  }
  get hasTimestamps(){
    return true;
  }

  created(){
    return this.belongsTo('User', 'created_by')
  }

  assigned(){
    return this.belongsTo('User', 'assigned_to')
  }

  priority(){
    return this.belongsTo('User', 'priority_id')
  }

  status(){
    return this.belongsTo('User', 'status_id')
  }
}

module.exports = bookshelf.model('Card', Card);