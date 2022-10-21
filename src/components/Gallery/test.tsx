import { fireEvent, screen } from '@testing-library/react';

import { render } from 'utils/test-utils';

import mockGallery from './mock';

import 'matchMediaMock';

import Gallery from '.';

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    render(<Gallery items={mockGallery} />);

    expect(screen.getByRole('button', { name: /thumb - gallery image 1/i })).toHaveAttribute('src', mockGallery[0].attributes.src);
    expect(screen.getByRole('button', { name: /thumb - gallery image 2/i })).toHaveAttribute('src', mockGallery[1].attributes.src);
  });

  it('should handle open modal', () => {
    render(<Gallery items={mockGallery.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });

    fireEvent.click(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }));
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });
  });

  it('should handle close modal when overlay or button clicked', () => {
    render(<Gallery items={mockGallery.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    fireEvent.click(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }));

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }));

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it('should handle close modal when pressed ESC', () => {
    const { container } = render(<Gallery items={mockGallery.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    fireEvent.click(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }));

    fireEvent.keyUp(container, { key: 'Escape' });

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it('should open modal with selected image', async () => {
    render(<Gallery items={mockGallery.slice(0, 2)} />);

    fireEvent.click(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }));

    const img = await screen.findByRole('img', { name: /gallery image 1/i });

    expect(img.parentElement?.parentElement).toHaveClass('slick-active');
  });
});
