import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Index from '@/components/RadioButtons/Index';

const options = ['Option 1', 'Option 2', 'Option 3'];

describe('Radio component test', () => {
    it('Should select and disply correct radio option', async () => {
        render(<Index/>);
       
        const radioOptions = options.map((option, index) => screen.getByLabelText(option));

        radioOptions.forEach((option) => {
            expect(option).not.toBeChecked();
        });

        await userEvent.click(radioOptions[1]);

        expect(radioOptions[1]).toBeChecked();
    })
})