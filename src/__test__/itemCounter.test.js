/**
 * @jest-environment jsdom
 */

import { itemsCounter } from '../modules/itemCounter.js';

test('items counter check ', () => {
  const arr = [
    {
      id: 3,
    },
  ];
  const counter = itemsCounter(arr);

  expect(counter).toBe(1);
});

test('items counter check if the there no data ', () => {
  const arr = [];

  const counter = itemsCounter(arr);

  expect(counter).toBe(0);
});
