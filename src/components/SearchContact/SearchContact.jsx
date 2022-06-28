import { Component } from 'react';
import styles from './searchcontact.module.css';


class SearchContact extends Component {
   
   
    handleChange = ({target}) => {
        const {value} = target;
        this.props.searchInput(value);
        
    }
    
    
    render() {
        return (
            <div className={styles.box}>
                <p className={styles.text}>Find contacts by name</p>
                <input 
                type="text"
                onChange={this.handleChange}
                />
            </div>
        )
}

    
    
}
       

export default SearchContact;