import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Index from '../Index';

describe('Table component test', () => {
    it('Should render table component', () => {
        render(<Index/>);
        const tableComponent = screen.getByText('Table Component');
        expect(tableComponent).toBeInTheDocument();

        const table = screen.getByRole('table');
        expect(table).toBeInTheDocument();

        const idCell = screen.getByText('Id');
        const nameCell = screen.getByText('Name');
        const emailCell = screen.getByText('Email');

        expect(idCell).toBeInTheDocument();
        expect(nameCell).toBeInTheDocument();
        expect(emailCell).toBeInTheDocument();


    })
})