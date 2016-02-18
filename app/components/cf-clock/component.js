import Component from 'ember-component';
import computed from 'ember-computed';
import { task, timeout } from 'ember-concurrency';
import { later, cancel } from 'ember-runloop';

export default Component.extend({
  tagName: 'time',
  attributeBindings: ['datetime'],

  tick: task(function*() {
    for (;;) {
      yield timeout(1000);
      this.notifyPropertyChange('now');
    }
  }).on('init'),

  now: computed(() => new Date()).volatile(),

  datetime: computed('now', function() {
    return this.get('now').toISOString();
  }),

  display: computed('now', function() {
    return this.get('now').toLocaleString();
  })
});
