import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('ToDoLists', () => {
    it('Should render No Data Found', () => {
        render(<ToDoLists toDoData={[]}/>);
        const noData = screen.getByText('No Data Found');
        expect(noData).toBeInTheDocument();
    })
    it('Should render todo list', () => {
        render(<ToDoLists toDoData={mockToDoData}/>);
        const list = screen.getAllByRole('listitem');
        expect(list).toHaveLength(3);
    })
})