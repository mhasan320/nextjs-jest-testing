import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectBox from '../Index';
import AutocompleteComponent from '../AutocompleteComponent';


describe('SelectBox component test', () => {
    it('Should select and disply correct select option', async () => {
        render(<SelectBox/>);
        
        const selectOptions = screen.getByTestId('select-box');

        expect(selectOptions).toHaveValue('Option 1');

        await userEvent.selectOptions(selectOptions, 'Option 2');

        expect(selectOptions).toHaveValue('Option 2');
    })
    it('Should select autocomplete box', async () => {
        render(<AutocompleteComponent />);

        // Find the Autocomplete input field
        const inputElement = screen.getByLabelText('Choose a country');
      
        // Click the input field to open the Autocomplete dropdown
        await userEvent.click(inputElement);
      
        // Type the name of the country you want to select (e.g., 'Australia')
        await userEvent.type(inputElement, 'Australia');
      
        // Wait for the suggestion list to appear
        const suggestion = await screen.findByText('Australia (AU) +61');
      
        // Click the suggested option
        await userEvent.click(suggestion);
      
        // Verify that the selected value is displayed in the input field
        expect(inputElement).toHaveValue('Australia');
    })
});