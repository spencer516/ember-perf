import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['uselessBool'],
  uselessBool: false,

  actions: {
    changeBool() {
      this.toggleProperty('uselessBool');
    }
  }
});
