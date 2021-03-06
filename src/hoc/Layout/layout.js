import React ,{Component} from 'react'
import  './layout.css';
import Header from './../../components/Header/header';
import Footer from './../../components/Footer/footer';
class Layout extends Component {
  state={
      showNav:false
  }
  togllesSidenav=(action)=>{
      this.setState({
          showNav:action
      })
  }
    render(){
        return(
            <>
           <Header
           showNav={this.state.showNav}
           onHideNav={()=>this.togllesSidenav(false)}
           onOpenNav={()=>this.togllesSidenav(true)}
           />
           <div>
            {this.props.children}</div>
           <Footer/>
            </>
        )
    }
}
export default Layout;