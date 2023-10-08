import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Index from '../Index';

describe('MuiDataTable component test', () => {
    it('Should render MuiDataTable component', () => {
        render(<Index/>);
        const muiTable = screen.getByRole('grid');
        expect(muiTable).toBeInTheDocument();

        const firstRow = screen.getByText('Jon');
        expect(firstRow).toBeInTheDocument();

        const secondRow = screen.getByText('Cersei');
        expect(secondRow).toBeInTheDocument();
    })
});