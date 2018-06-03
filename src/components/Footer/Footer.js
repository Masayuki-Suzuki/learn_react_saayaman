import React from 'react'
import './Footer.scss'
import twitterImage from '../../assets/img/twitter.svg'
import facebookImage from '../../assets/img/facebook.svg'

export default () => (
  <div className="Footer">
    <p>Copyright © 2018 Masayuki Suzuki</p>
    <div className="Footer-social">
      <a
        href="https://www.facebook.com/masayuki.suzuki.50"
        target="_blank nonopener nonreferer"
      >
        <img alt="twitter icon" src={twitterImage} />
      </a>
      <a
        href="https://twitter.com/9_Planet"
        target="_blank nonopener nonreferer"
      >
        <img alt="facebook icon" src={facebookImage} />
      </a>
    </div>
  </div>
)
