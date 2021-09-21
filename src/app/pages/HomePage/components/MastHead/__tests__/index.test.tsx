import * as React from 'react';
import { render } from '@testing-library/react';

import { MastHead } from '..';

describe('<MastHead  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<MastHead />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
