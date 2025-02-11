import { shallow } from 'enzyme';
import * as React from 'react';

import { Logout } from './Logout';

describe('layouts/Logout', () => {
  const component = shallow<Logout>(
    <Logout dispatchLogout={jest.fn()} token="" />
  );

  it('dispatches logout action on componentDidMount', () => {
    const instance = component.instance();
    if (!instance) {
      throw Error('Logout component did not mount!');
    }
    expect(instance.props.dispatchLogout).toBeCalled();
  });
});
