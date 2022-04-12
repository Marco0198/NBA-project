import React from 'react'
import NewSlider from './widgets/NewsSlider/slider';
import NewsList from './widgets/NewsList/newsList';

 const Home = () => {
  return (
    <div>
      <NewSlider type="feature" start={0} amount={6}/>
      <NewsList type="" loadmore={true} start={9} amount={10} />
    </div>
  )
}
export default Home;