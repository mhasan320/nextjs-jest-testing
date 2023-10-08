import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Index from '@/components/AddToDoList';
import ToDoLists from '@/components/TodoLists/index';

const mockToDoData = [{
    id:1,
    title:'title1',
    content:'content1',
    status:'todo'
},{
    id:2,
    title:'title2',
    content:'content2',
    status:'doing'
},{
    id:3,
    title:'title3',
    content:'content3',
    status:'done'
}]

const mockSubmitHandler = jest.fn();

describe('AddToDoList', () => {
    describe('Render', () => {
        it('Should render todo list', () => {
            render(<ToDoLists toDoData={mockToDoData}/>);
            const list = screen.getAllByRole('listitem');
            expect(list).toHaveLength(3);
        })
    })
    describe('Interactions', () => {
        it('Should submit the form', async () => {
            render(<Index/>);
            const title = screen.getByPlaceholderText('Title');
            const content = screen.getByPlaceholderText('Content');
            const submit = screen.getByRole('button', {name: /submit/i});
            await userEvent.type(title, 'title4');
            await userEvent.type(content, 'content4');
            await userEvent.click(submit);
            const submitedValue = screen.getByText('title4');
            expect(submitedValue).toBeInTheDocument();
        })
    })

})