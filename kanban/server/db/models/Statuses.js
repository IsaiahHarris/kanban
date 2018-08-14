const bookshelf = require('./bookshelf');

class Statuses extends bookshelf.Model{
  get tableName(){
    return 'statuses'
  }
  get hasTimestamps(){
    return true;
  }

  status(){
    return this.hasMany('Card', 'status_id')
  }
}

module.exports = bookshelf.model('Statuses', Statuses)