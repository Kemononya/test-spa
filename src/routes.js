const apiPath = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=';

export default {
  tenFactsPath: () => [apiPath, '10'].join(''),
};
