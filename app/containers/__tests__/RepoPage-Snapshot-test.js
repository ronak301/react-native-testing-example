jest.mock('../../components/RepoList', () => 'Repot');

import React from 'react';
import renderer from 'react-test-renderer';

import { RepoPage } from '../RepoPage';
import { repos } from '../../../config/jest/mockData';

/*
Essence of jest.mock: When we don't use jest.mock, The dependency component will be shown
with the full breakdown of the react components it is made from. But that thing is already
covered in that dependency component's test, hence we don't want to repeat the same snapshot,
instead what we want is just return a React element that represents the parameters with which
the dependency component was created. For that we use jest.mock.
*/

/*
jest.mock does not require the component itself, it just changes the behaviour of React require(' ') to pick the mocked component.
*/

/*
jest.mock(PATH_TO_COMPONENT, FACTORY_FUNCTION):
   The most simple factory function returns a string, like () => 'SomeName'.
   React actually accepts a string as a ‘component’, which is a shorthand for
   rendering a named element with its provided props and children.
*/

it('renders a RepoPage using Snapshots', () => {
  
  const _getComponent = (props) => {
    return (
      renderer.create(
        <RepoPage
          repos={props}
          getRepos={jest.fn()}
        />
      )
    )
  };
  
  let component = _getComponent({ isLoading: true, repos: [] });
  expect(component).toMatchSnapshot();
  
  component = _getComponent({ isLoading: false, repos });
  expect(component).toMatchSnapshot();
});
