import test from 'node:test';
import assert from 'node:assert/strict';

import { filterCharacters, calculateTotals } from '../src/utils/characters.js';

test('filterCharacters finds characters by name or alias', () => {
  const characters = [
    { name: 'Monkey D. Luffy', alias: 'Sombrero de Paja', bounty: '3,000,000,000', role: 'Main' },
    { name: 'Roronoa Zoro', alias: 'Cazador de Piratas', bounty: '930,000,000', role: 'Main' }
  ];

  assert.equal(filterCharacters(characters, 'luffy').length, 1);
  assert.equal(filterCharacters(characters, 'piratas').length, 1);
  assert.equal(filterCharacters(characters, 'nada').length, 0);
});

test('calculateTotals sums active bounties', () => {
  const characters = [
    { name: 'Luffy', bounty: '3,000,000,000', role: 'Main' },
    { name: 'Zoro', bounty: '930,000,000', role: 'Main' }
  ];

  const totals = calculateTotals(characters);

  assert.equal(totals.count, 2);
  assert.equal(totals.totalBounty, '3,930,000,000');
});
