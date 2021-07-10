import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <Fragment>
        <div className="sushi">
        <div className="plate" 
            onClick={() => props.eatSushi(props.sushiDetail)}>
          { 
           props.sushiDetail.eaten ?
              null
            :
              <img src={props.sushiDetail.img_url} alt="Oh no!" width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {props.sushiDetail.name} - ${props.sushiDetail.price}
        </h4>
      </div>
    </Fragment>
    
  )
}

export default Sushi