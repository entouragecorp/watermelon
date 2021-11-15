import React from 'react'
import Next from '../Components/NextButton/Next'
import NextGreen from '../Assets/next-green.png'
import Sour from '../Assets/sour.svg'
import './Pages.scss'

/**
* @author
* @function Prizing
**/

const Prizing = (props) => {
  return(
    <div className='Prizing'>
      <div className='titleContainer'>
        <h1 className='watermelon_h1'>WATERMELON</h1>
        <h5 className='watermelon_h5'>1G 510 CARTRIDGE</h5>
      </div>

      <div id='next_btn_green'>
          <Next image={NextGreen} link='/instructions'/>
      </div>

      {/* Three StackedColumns */}

      <div className='columns_holder'>

        <div className='shared_width left-content'>

              <div className='shared_width'>
                <div className='info_container'>
                  <h1 className='watermelon_h1'>WATERMELON</h1>
                  <h5 className='watermelon_h5'>1G 510 CARTRIDGE</h5>
                </div>

                <div className='info_container'>
                  <p className='margin_zero' style={{fontSize: '13px'}}>Watermelon is our newest Saturday distillate featuring a tropical fruit flavour; packed with a blend of terpenes including alpha-pinene, limonene and linalool. With it’s very strong THC potency potential, Saturday 510 carts are here for the weekend.</p>
                </div>

                <div className='info_container'>
                  <p className='margin_zero'>HYBRID</p>
                  <p className='margin_zero thin'>THC 77-83%</p>
                  <p className='margin_zero thin'>CBD 0-2%</p>
                </div>
                <div className='info_container'>
                  <p className='margin_zero'>AROMA & FLAVOURS</p>
                  <p className='margin_zero thin'>Fruity, Floral, Sweet</p>
                </div>

                <div className='info_container'>
                  <p className='margin_zero'>LICENSED PRODUCER</p>
                  <p className='margin_zero thin'>WeedMD Rx Inc.</p>
                </div>
              </div>

        </div>
      </div>
    </div>
   )

 }

export default Prizing