import Ember from 'ember';
import { createObservable } from 'ember-concurrency';
const { $: { getJSON } } = Ember;

export default function fetch(url) {
  return createObservable(publish => {
    let xhr = getJSON(url);

    xhr.then(publish, publish.error);

    return () => xhr.abort();
  });
}
