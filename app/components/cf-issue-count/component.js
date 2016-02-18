import Ember from 'ember';
import Component from 'ember-component';
import { task, timeout } from 'ember-concurrency';
import fetch from 'concurrency-fun/utils/fetch';

export default Component.extend({
  tagName: 'span',
  isLoading: true,
  repo: null,

  loadCount: task(function * () {
    let repo = this.get('repo');
    let { open_issues_count } = yield fetch(`https://api.github.com/repos/${repo}`);

    this.set('isLoading', false);
    this.set('count', open_issues_count);
  }).on('init')
});
