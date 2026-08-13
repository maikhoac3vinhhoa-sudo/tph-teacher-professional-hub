import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
it('renders the TPH dashboard shell', async () => {
render(<App />);
expect(await screen.findByText('Trung tâm quản lý chuyên môn cá nhân')).toBeInTheDocument();
expect(screen.getByText('Lịch hôm nay')).toBeInTheDocument();
});
});
