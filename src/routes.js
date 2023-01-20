const apiPath = 'https://cat-fact.herokuapp.com';

export default {
  fiveFactsPath: () => [apiPath, 'facts/random?animal_type=cat&amount=5'].join('/'),
};
