import React from 'react'
import "./plans.css"
import {plansData} from "../../data/plansData"
import whiteTick from '../../assets/whiteTick.png'

const PLans = () => {
  return (
    <div className='plans-container' id="plan">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="Programs-headers" stylw={{gap: "2rem"}} >
            <spam className="stroke-text">READY TO START</spam>
            <spam>YOUR JOURNEY</spam>
            <spam className="stroke-text">NOW WITHUS</spam>
        </div>

        <div className="plans">
            {plansData.map((plan,i)=>(
                <div className="plan" key={(i)}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>
                                    {
                                        feature
                                    }
                                </span>
                            </div>
                        ))}
                    </div>
                    <div><span>See more benefits -{'>'}</span></div>
                    <button className="btn">Join now</button>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default PLans
