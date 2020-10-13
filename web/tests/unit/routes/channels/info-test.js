import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | channels/info', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:channels/info');
    assert.ok(route);
  });
});
