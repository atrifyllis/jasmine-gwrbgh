import './test/jasmine-setup';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';

import './test.ts'
import produce from 'immer';

describe('Immer:', ()=>{
  it('should replace array reference in state', () => {
        let state = {
            someArray: [1],
        };
        const somArrayUpdate = [2, 3];

        state = produce(state, draft => {
            draft.someArray = somArrayUpdate;
        });
        console.log(state.someArray);
        // update external array
        somArrayUpdate.push(4);
        // expect that the state array is not the same reference with the external array
        console.log(state.someArray);
        expect(state.someArray).not.toBe(somArrayUpdate);
    });
});

(function bootstrap () {
  if (window.jasmineRef) {
    location.reload();

    return;
  }

  window.onload(new Event('anything'));
  window.jasmineRef = jasmine.getEnv();
}());
