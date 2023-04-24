import { convertRepoStringToTitle } from 'utils/helpers';

describe('convert repo name to string', () => {
  test('should not have any dashes and correctly capitalize first letter of each word in a title', () => {
    expect(convertRepoStringToTitle('hashmap-visualizer')).toBe('Hashmap Visualizer');
    expect(convertRepoStringToTitle('react-ts-promise-test')).toBe('React Ts Promise Test');
  });
});
