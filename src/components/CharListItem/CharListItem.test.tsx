import React from 'react';
import {render, screen} from '@testing-library/react';

import CharListItem from './index';

describe('CharListItem snapshot', () => {
  it ('CharListItem snapshot didnt change', () => {
    const app = render(<CharListItem id={1} name='Captain' path='test' extension='.jpg'/>)

    expect(app).toMatchSnapshot();
  });
});

describe('The CharListItem component', () => {
  it('should text is printed correctly', () => {
    render(<CharListItem id={1} name='Captain' path='test' extension='.jpg'/>)

    expect(screen.getByText('Captain')).toBeInTheDocument();
  })

  it('should there is an img tag', () => {
    render(<CharListItem id={1} name='Captain' path='test' extension='.jpg'/>)

    expect(screen.getByRole('img')).toBeInTheDocument();
  })
})
