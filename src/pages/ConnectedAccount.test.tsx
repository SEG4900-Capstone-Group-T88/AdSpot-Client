import { render, screen } from '../../test-utils';
import '@testing-library/jest-dom';
import ConnectedAccounts from './ConnectedAccounts';

it("renders your connected accounts section", async () => {
    render(<ConnectedAccounts/>);
    screen.getByText(/Your Connected Accounts/i);
});

it("renders connected accounts section", async () => {
    render(<ConnectedAccounts/>);
    screen.getByText(/Connect a Social Media Account/i);
});
