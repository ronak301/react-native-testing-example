import React from 'react';
import renderer from 'react-test-renderer';   // renders React-Native components in form of pure javascript objects.

import RepoList from '../RepoList';
import { repos } from '../../../config/jest/mockData';

/*
for testing a List View Component we give it MOCK_DATA as props,
which replicates the original data. The snapshot would contain the
breakdown of the whole ListView Component in terms of functions and
Values that we have given in MOCK_DATA, it would also show the styles
applied to different react components. All these will be saved in a
.snap file. Everytime a test fails, we can check the diff in .snap file
and accordingly select whether the change was desired or not and accordingly
modify the snapshot for future tests.
*/

/*
Here, since selectRepo prop requires a function, we mock it by using jest's
mock function prototype.
*/

it('renders a RepoList using Snapshots', () => {
  const component = renderer.create(
    <RepoList
      repos={repos}
      selectRepo={jest.fn()}
    />
  );
  expect(component).toMatchSnapshot();
});
