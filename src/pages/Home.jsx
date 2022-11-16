import HOC from "../Components/HOC"
import Card from "../Components/Card"
import About from '../Components/Home/About';
import Presentation from '../Components/Home/Presentation';

import aboutimage from '../Components/images/about.png';

const Home = () => {
    return (<HOC>

     <div>
       <Card />
       <About image={aboutimage} />
       <Presentation />
     </div>
    </HOC>)
}

export default Home