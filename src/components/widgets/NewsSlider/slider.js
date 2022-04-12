import React,{Component} from 'react';
import axios from 'axios';
import  {SliderTemplate} from './SliderTemplate'
import {URL} from '../../../constant'

class NewSlider extends Component{
state={
    news:[]
}
componentDidMount(){
    axios.get(` ${URL}/articles?_start=${this.props.start}}&_end=${this.props.amount}`).then(
        response=>{
           this.setState({
               news:response.data
           })
        }
    )
}
    render(){
     //   console.log(this.state.news)
        return(
           <div>         
               <SliderTemplate data={this.state.news} type={this.props.type}/>
           </div> 
        )
    }
}
export default NewSlider;