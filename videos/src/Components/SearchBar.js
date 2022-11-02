import React from 'react'
import "semantic-ui-css/semantic.min.css"

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:''
        }
    }
    onInputchange=(event)=>{
    this.setState(
    {
        term:event.target.value

    }
)
    }

    onFormSubmit=(event)=>{
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }
    render(){
        return(
            <div className='search-bar ui raised segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Video Search</label><br/>
                        <input type="text" value={this.state.term} 
                        onChange={this.onInputchange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar