import React from 'react';
import renderer from 'react-test-renderer';

import RepoItem from '../RepoItem';
import { repos } from '../../../config/jest/mockData';

/*
In RepoItem testing, we pass repo[0] from the MOCK_DATA and selectRepo as a
mock jest function. We do not pass isSelected props, hence the RepoItem style won't show
the green background and description in the generated snapshot. But when we also pass a isSelected prop
as TRUE, the test fails as it does not match the snapshot that was created before. Now we can see the
failure is expected and in the further test cycles we want that change to be imposed, we do this by
command: npm test -- -u TEST_NAME, this will modify the snapshot of the particular test and we are good
to go for upcoming test cycles.
*/

/*
In our application, it is possible to have both the values for isSelected prop. Better way to test it would be
to write two different tests, 1. including IsSelected and 2. excluding isSelected.
*/

it('renders a RepoItem using Snapshots 2', () => {
  const wrapper = renderer.create(
    <RepoItem
      // isSelected
      repo={repos[0]}
      selectRepo={jest.fn()}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
it('renders a RepoItem using Snapshots', () => {
  const wrapper = renderer.create(
    <RepoItem
      isSelected
      repo={repos[0]}
      selectRepo={jest.fn()}
    />
  );
  expect(wrapper).toMatchSnapshot();
});