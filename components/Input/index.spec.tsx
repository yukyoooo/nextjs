import { render, screen, RenderResult, fireEvent } from '@testing-library/react'
import { Input } from './index'

describe('Input', () => {
    let renderResult: RenderResult
    beforeEach(() => {
        renderResult = render(<Input id="username" label="username" />)
    })
    afterEach(() => {
        renderResult.unmount()
    })

    it('should empty in input on initial render', () => {
        const inputNode = screen.getByLabelText('username') as HTMLInputElement
        expect(inputNode).toHaveValue('')
    })
    
    it('should show input text', () => {
        const inputText = 'Test input Text'
        const inputNode = screen.getByLabelText('username') as HTMLInputElement
        
        fireEvent.change(inputNode, { target: {value: inputText }})
        expect(inputNode).toHaveValue(inputText)
    })
    
    it('should reset when user clicks button', async () => {
        const inputText = 'Test Input Text'
        const inputNode = screen.getByLabelText('username') as HTMLInputElement
        fireEvent.change(inputNode, { target: {value: inputText} })
        
        const buttonNode = screen.getByRole('button', {
            name: 'Reset',
        }) as HTMLButtonElement
        fireEvent.click(buttonNode)

        expect(inputNode).toHaveValue('')
    })

    
})