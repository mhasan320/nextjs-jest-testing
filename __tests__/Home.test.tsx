import { render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '@/pages/index'

describe('Home', () => {
    describe('Render', () => {
        it('should render the heading', () => {
            render(<Home />)
            expect(screen.getByRole('heading', { name: /Hello world!/i })).toBeInTheDocument()
        })
        it('should render the image', () => {
            render(<Home />)
            expect(screen.getByRole('img', { name: /vercel logo/i })).toBeInTheDocument()
        })
    })
    describe('Interactions', () => {
        it('should increment the clicks', async () => {
            render(<Home />)
            const heading = screen.getByRole('heading', { name: /Hello world!/i })
            expect(heading).toHaveTextContent('Hello world!')
            await userEvent.click(heading)
            expect(heading).toHaveTextContent('Hello world!')
        })
    })
})