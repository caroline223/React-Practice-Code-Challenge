import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map((sushi, id) => <Sushi key={id} sushiDetail={ sushi } eatSushi={props.eatSushi}/>)
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton handleMoreSushi={props.handleMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer