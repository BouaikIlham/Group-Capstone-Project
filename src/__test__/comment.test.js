/**
 * @jest-environment jsdom
 */

import { commentCounter } from '../modules/commentCounter.js';

test('items counter check ', () => {
  const arr = [
    {
      id: 1,
      username: '',
      comment: '',
    },
  ];
  const counter = commentCounter(arr);

  expect(counter).toBe(1);
});

test('items counter check if num of comments 0 ', () => {
  const arr = [];

  const counter = commentCounter(arr);

  expect(counter).toBe(0);
});
