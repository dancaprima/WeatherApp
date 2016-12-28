import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {term: ''}
    }
    inputChange(event){
        console.log(event.target.value);
    }
    render() {
        return (  
    <form action="" className="input-group">
        <input className="form-control" placeholder="Search forecast" 
        onChange={this.inputChange} 
        value={this.state.term} />
          <span className="input-group-btn">
                <button className="btn btn-primary">
                Submit            
                </button>
         </span>
    </form>
          
        );
    }
}

export default SearchBar;