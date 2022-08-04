import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img
            className='home_image'
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._C8428684220_.jpg' 
            alt='' 
            />

            <div className='home_row'>
              <Product 
              id='12325684'
              title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback'
              price={29.99}
              image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
              rating={5} 
              />
              <Product
              id='49534585' 
              title='Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
              price={239.0}
              rating={4}
              image='https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SX425_.jpg'
              />
            </div>

            <div className='home_row'>
             <Product 
             id='59534585' 
              title="Samsung Smart watch with Heart Rate Blood Oxygen Monitor"
              price={199.99}
              rating={3}
              image='https://m.media-amazon.com/images/I/71w+fcnZ+qL._AC_UL320_.jpg'
             />
             <Product 
             id='69534585' 
              title='Amazon Echo (3rd generation) Smart Speaker with Alexa, Charcoal Fabric'
              price={98.99}
              rating={5}
              image='https://m.media-amazon.com/images/I/61b4qFTXRML._AC_SX679_.jpg'
             />
             <Product 
             id='79534585' 
              title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
              price={598.99}
              rating={4}
              image='https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
             />
            </div>

            <div className='home_row'>
              <Product 
              id='89534585' 
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image='https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SX425_.jpg'
              />
            </div>

        </div>
    </div>
  );
}

export default Home;