import {render,screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('it shows two input and a button',()=>{
    //render the component
    render(<UserForm />)
    //manipulate the component or find an elemnt in it
    const inputs=screen.getAllByRole('textbox')
    const button=screen.getByRole('button')

    //Assertion-make sure the component is doing what is expected
    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()
})  

test('inputs and button are working correctly',()=>{
   
  //creating a mock function using jest 
    const mock=jest.fn()
    render(<UserForm onUserAdd={mock}/>)

    //find the two inputs
    const nameInput=screen.getByRole('textbox',{
        name:/name/i
    })
    const emailInput=screen.getByRole('textbox',{
        name:/e-mail/i
    })
    //Simulate typing in a name
    user.click(nameInput)
    user.keyboard('chhavi')
    user.click(emailInput)
    user.keyboard('chhavi.1296@gmail.com')

    const button=screen.getByRole('button')
    user.click(button)

    //assertions
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith({name:'chhavi',email:'chhavi.1296@gmail.com'})

})