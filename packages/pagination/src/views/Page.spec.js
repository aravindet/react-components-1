/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { shallow } from 'enzyme';

import Page from './Page';

describe('Page', () => {
  it('renders default styling', () => {
    const wrapper = shallow(<Page />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders current styling if provided', () => {
    const wrapper = shallow(<Page current />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders focused styling if provided', () => {
    const wrapper = shallow(<Page focused />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders hovered styling if provided', () => {
    const wrapper = shallow(<Page hovered />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders hidden styling if provided', () => {
    const wrapper = shallow(<Page hidden />);

    expect(wrapper).toMatchSnapshot();
  });
});
