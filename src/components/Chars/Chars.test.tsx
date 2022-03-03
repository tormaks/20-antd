import React from 'react';
import {render, screen} from '@testing-library/react';

import Chars from './index';

describe('Chars snapshot', () => {
  it ('Chars snapshot didnt change', () => {
    const app = render(<Chars errorLoading = {false} charsLoading = {true} chars = {[]} active = {true} search = ''/>)

    expect(app).toMatchSnapshot();
  });
});

describe('The Chars component', () => {
  it('should be list in the document', () => {
    render(<Chars errorLoading={false} charsLoading={false} chars={[]} active={true} search={''}/>)

    expect(screen.getByRole('list')).toBeInTheDocument();
  })

  it('should be button in the document', () => {
    render(<Chars errorLoading={false} charsLoading={false} chars={[]} active={true} search={''}/>)

    expect(screen.getByRole('button')).toBeInTheDocument();
  })

  it('should button style have display: block', () => {
    render(<Chars errorLoading={false} charsLoading={false} chars={[]} active={true} search={''}/>)

    expect(screen.getByRole('button')).toHaveStyle('display: block');
  })

  it('should ul style have display: grid', () => {
    render(<Chars errorLoading={false} charsLoading={false} chars={[]} active={true} search={''}/>)

    expect(screen.getByRole('list')).toHaveStyle('display: grid');
  })

  it('should be button not hidden in the document', () => {
    render(<Chars errorLoading={false} charsLoading={false} chars={[]} active={true} search={''}/>)

    expect(screen.getByRole('button', {hidden: false})).toBeInTheDocument();
  })

  it('should be Error component in the document', () => {
    render(<Chars errorLoading={true} charsLoading={false} chars={[]} active={true} search={''}/>)

    expect(screen.getByText('Error')).toBeInTheDocument();
  })
})
