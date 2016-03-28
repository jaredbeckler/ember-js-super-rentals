import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateRentalForm: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },

    imageHide: function() {
      this.set('isImageShowing', false);
    },

    update(rental, parameters) {
      this.sendAction('update', rental, parameters);
    },

    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
