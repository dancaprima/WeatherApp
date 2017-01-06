import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {term: ''}
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange(event){
        this.setState({term : event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
    }
    render() {
        return (  
    <form onSubmit={this.onFormSubmit} className="input-group">
        <input className="form-control" placeholder="Search forecast" 
        onChange={this.inputChange} 
        value={this.state.term} />
          <span className="input-group-btn">
                <button type="submit" className="btn btn-primary">
                Submit            
                </button>
         </span>
    </form>
          
        );
    }
}

export default SearchBar;