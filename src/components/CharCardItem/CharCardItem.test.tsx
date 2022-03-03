import React from 'react';
import {render, screen} from '@testing-library/react';

import CharCardItem from './index';

describe('CharCardItem snapshot', () => {
  it ('CharCardItem snapshot didnt change', () => {
    const app = render(<CharCardItem id={1} name='Captain' path='dasdas' extension='dasdasd'/>)

    expect(app).toMatchSnapshot();
  });
});

describe('The CharCardItem component', () => {
  it('should text is printed correctly', () => {
    render(<CharCardItem id={1} name='Captain' path='dasdas' extension='dasdasd'/>)

    expect(screen.getByText('Captain')).toBeInTheDocument();
  })

  it('should there is an img tag', () => {
    render(<CharCardItem id={1} name='Captain' path='test' extension='.jpg'/>)

    expect(screen.getByRole('img')).toBeInTheDocument();
  })
})
