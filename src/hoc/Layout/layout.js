import React ,{Component} from 'react'
import  './layout.css';
class Layout extends Component {
    render(){
        return(
            <>
            <h1>Header</h1>
            {this.props.children}
            <h1>Footer</h1>
            </>
        )
    }
}
export default Layout;