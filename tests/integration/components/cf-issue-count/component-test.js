import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cf-issue-count', 'Integration | Component | cf issue count', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{cf-issue-count}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#cf-issue-count}}
      template block text
    {{/cf-issue-count}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
