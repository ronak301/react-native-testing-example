import { selectRepo } from '../repos';

it('creates a SELECT_REPO action', () => {
  expect(selectRepo(1000)).toMatchSnapshot();
});