import {render,screen,within} from '@testing-library/react'

import UserList from './UserList'


function renderComponent(){
    const users=[
        {name:'chhavi',email:'chhavi.1296@gmail.com'},
        {name:'rohit',email:'rohitsingh1995@gmail.com'}
]
render(<UserList users={users}/>)
}
test('render one row per user',()=>{
    //Render the component
    renderComponent()

//approach number 1
const rows=within(screen.getByTestId('users')).getAllByRole('row')

//approach number 2

// const rows=container.querySelectorAll('tbody tr')
expect(rows).toHaveLength(2)
})

test('render the email and name of each user',()=>{
    const {users}=renderComponent()

for(let user of users){
    const name=screen.getByRole('cell',{name:user.name})
    const email=screen.getByRole('cell',{name:user.email})
    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
}
})


