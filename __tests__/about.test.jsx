import {render,screen} from '@testing-library/react'
import About from '../pages/about'
import '@testing-library/jest-dom'

describe('About title', () => {
    it('renders a heading', () => {
        
        render(<About />)

        const heading = screen.getByRole('heading', {
            name: /About/,
        })

        expect(heading).toBeInTheDocument()
    })
})

describe('About text', () => {
    it('renders a description text', () => {
        
        render(<About />)

        const paragraph = screen.getByText('ODN Project is a page related to js development of static and dynamic features for web applications.', {})
        const link = screen.getByRole('link', {
            name: 'my repository',
            link: 'https://github.com/mauroimamura/odn_project'
        })

        expect(paragraph).toBeInTheDocument()
        expect(link).toBeInTheDocument()
    })
})
