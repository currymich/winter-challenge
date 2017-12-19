import React from 'react';

const Landing = () => {
  return (
    <div className='wc-landing--wrapper'>
      <div className='wc-landing--heading'>
        <h1>
          Element Winter Challenge
        </h1>
      </div>
      <div className='wc-landing--section'>
        <p>Track progress on your winter challenge goals, earn points, win prizes!</p>
      </div>
      <div className='wc-landing--section leaderboard'>
        <h3>Leaderboard</h3>
        <ul className='leaderboard-list'>
          <li className='leaderboard-profile'>
            <div className='leaderboard-rank'>1</div>
            <div className='leaderboard-name'>Ming Mang</div>
            <div className='leaderboard-points'>300</div>
          </li>
          <li className='leaderboard-profile'>
            <div className='leaderboard-rank'>2</div>
            <div className='leaderboard-name'>Ching Chang</div>
            <div className='leaderboard-points'>200</div>
          </li>
          <li className='leaderboard-profile'>
            <div className='leaderboard-rank'>3</div>
            <div className='leaderboard-name'>Ding Dang</div>
            <div className='leaderboard-points'>100</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Landing;
