import React,{Component} from 'react';
 import {CSSTransition,TransitionGroup} from "react-transition-group"
import  {Link} from 'react-router-dom';
import axios from "axios";
import {URL} from '../../../constant'
import './newsList.css'
class NewsList extends Component{
    state={
     items:[],
     start:this.props.start,
     amount:this.props.amount,
     end:this.props.start+this.props.amount

    }
    componentDidMount(){
     axios.get(`${URL}/articles?_start=${ this.state.start}&_end=${this.state.end}`).then(res=>{
         this.setState({
             items:[...this.state.items,...res.data]
         })
     })   
    }
    renderNews=(type)=>{
        let template=null;
        switch ('card') {
            case template:this.state.items.map((item,i)=>(
                <div>
                     <div className="newslist_item">
                       <Link to={`/articles/${item.id}`}>
                        <h2>{item.title}</h2>
                       </Link>
                     </div>
                </div>

            ))
                
                break;
        
            default:
                break;
        }
    }
    render(){
        console.log('----------------')
        console.log(this.state.items)
        return(
      <div>
        {this.renderNews(this.props.type)}
     </div>

        )
    }
}
export default  NewsList;