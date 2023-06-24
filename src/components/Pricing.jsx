import React from 'react'
import "../styles/pricing.css"

function Pricing() {
  return (
    <>
    
      <div className='flex-container-pricing'>
      <h1>Check our pricing</h1>
        <div className='innerPricingDiv'>
        <div className='category'>
            <h2>STARTUP</h2>
            <h3><span>$</span>0<span>/ MO.</span></h3>
            <ul>
                <li>Up to 5 Documents</li>
                <li>Up to 3 Reviews</li>
                <li>5 team Members</li>
                <li>Limited Support</li>
            </ul>
            <button>Get Free</button>
        </div>
        <div className='premiumCategory'>
            <h2>PREMIUM</h2>
            <h3><span>$</span>10<span>/ MO.</span></h3>
            <ul>
                <li>Up to 15 Documents</li>
                <li>Up to 10 Reviews</li>
                <li>25 team Members</li>
                <li>Limited Support</li>
            </ul>
            <button>Get Free</button>
        </div>
        <div className='category'>
            <h2>PROFESSIONAL</h2>
            <h3><span>$</span>30<span>/ MO.</span></h3>
            <ul>
                <li>Unlimited Documents</li>
                <li>Unlimited Reviews</li>
                <li>Unlimited Members</li>
                <li>Unlimited Support</li>
            </ul>
            <button>Get Free</button>
        </div>
        </div>
       
      </div>
    </>
  )
}

export default Pricing
