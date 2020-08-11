import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Login from './index';


afterEach(cleanup)

describe('test of Login component', () => {
  it('should be render the content', () => {
    const { getByText } = render(
      <Login />
    );

    expect(getByText('Faça seu login')).toBeTruthy();
  });
});