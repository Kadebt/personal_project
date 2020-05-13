import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import '../dashboard.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

// import axios from 'axios';
// import Shop from './Shop'


const Dashboard = (props) => {

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 1500,
        autoplaySpeed: 2800,
        slidesToShow: 3,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
      };

    return(
        <div className="dashboard_main_div">
        <Slider {...settings}>
       
            
        <Link className="dash_link" to="/shop/1"> 
        <img className="dashboard_img" src="https://pbs.twimg.com/media/DwQ1zTtU8AA47u3.jpg"/> <h1 className='dash_link_text'>Decks</h1>
        </Link>


        <Link className="dash_link" to="/shop/2"><img className="dashboard_img" src="https://i.pinimg.com/originals/31/7a/2e/317a2ebacfb15e269910540e9a9bd7f2.jpg"/><h1 className='dash_link_text'>Trucks</h1></Link>

        <Link className="dash_link" to="/shop/3"><img className="dashboard_img" src="https://www.thrashermagazine.com/images/image/Features/2018/ChrisJoslin/Chris_Joslin_photo2_750px_2x.jpg"/> <h1 className='dash_link_text'>Wheels</h1></Link>

        <Link className="dash_link" className="dash_link" to="/shop/4"><img className="dashboard_img" src="https://i.pinimg.com/originals/53/c6/38/53c638d9219520b0e799667344435420.jpg"/><h1 className='dash_link_text'>Bearings</h1></Link>


        <Link className="dash_link" to="/shop/5"><img className="dashboard_img" src="https://images.freeskatemag.com/wp-content/uploads/2018/11/20144717/deeddz_ollieoverbacklip_lisbon_marcelveldman_01.jpg"/><h1 className='dash_link_text'>HardWare</h1></Link>
        
        </Slider>

        
        </div>
    )
}

export default withRouter (Dashboard)