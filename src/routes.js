const apiPath = 'https://cat-fact.herokuapp.com';

export default {
  tenFactsPath: () => [apiPath, 'facts/random?animal_type=cat&amount=5'].join('/'),
};
