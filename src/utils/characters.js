export function normalizeText(value = '') {
  return value.toLowerCase().trim();
}

export function filterCharacters(characters = [], query = '') {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return characters;
  }

  return characters.filter((character) => {
    const haystack = [character.name, character.alias, character.role]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function calculateTotals(characters = []) {
  const count = characters.length;
  const totalBounty = characters.reduce((sum, character) => {
    const numericValue = Number(String(character.bounty).replace(/[^\d]/g, ''));
    return sum + (Number.isFinite(numericValue) ? numericValue : 0);
  }, 0);

  return {
    count,
    totalBounty: totalBounty.toLocaleString('en-US')
  };
}
