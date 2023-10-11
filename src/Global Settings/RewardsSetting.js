import React, { useState } from 'react';
import MainMenu from '../MainMenu';
import '../App.css';

const SubscriptionUserList = () => {
  const [cancelledSubscriptions, setCancelledSubscriptions] = useState([]);
  const [expiredSubscriptions, setExpiredSubscriptions] = useState([]);
  const [displayOption, setDisplayOption] = useState('active');
  const [rewardType, setRewardType] = useState('');
  const [streakDays, setStreakDays] = useState('');
  const [coinAmount, setCoinAmount] = useState('');
  const [rewardList, setRewardList] = useState([]);

  const handleDisplayOptionChange = (status) => {
    setDisplayOption(status);
  };

  const handleRewardTypeChange = (event) => {
    setRewardType(event.target.value);
  };

  const handleStreakDaysChange = (event) => {
    setStreakDays(event.target.value);
  };

  const handleCoinAmountChange = (event) => {
    setCoinAmount(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newReward = {
      type: rewardType,
      days: rewardType === 'Streak' ? streakDays : '-',
      coins: coinAmount,
    };

    setRewardList([...rewardList, newReward]);

    // Reset form fields
    setRewardType('');
    setStreakDays('');
    setCoinAmount('');
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className='search1'>
            <h1 className='reg'>Rewards</h1>
          </div>
          <div className='userbuttoncontainer1'>
            <div
              className={displayOption === 'rewards' ? 'active-option' : 'option'}
              onClick={() => handleDisplayOptionChange('rewards')}
            >
              Rewards Settings
            </div>
            <div
              className={displayOption === 'redeem' ? 'active-option' : 'option'}
              onClick={() => handleDisplayOptionChange('redeem')}
            >
              Redeem Settings
            </div>
          </div>

          {displayOption === 'rewards' && (
            <div className='rewards-form'>
              <form onSubmit={handleFormSubmit} className='reward-form'>
                <label htmlFor='rewardType'>Type:</label>
                <select className='id' id='rewardType' value={rewardType} onChange={handleRewardTypeChange}>
                  <option value=''>Select a type</option>
                  <option value='App Starting'>App Starting</option>
                  <option value='Tik Tok'>Tik Tok</option>
                  <option value='Sleep'>Sleep</option>
                  <option value='Mindfulness'>Mindfulness</option>
                  <option value='Streak'>Streak</option>
                </select>

                {rewardType === 'Streak' && (
                  <div>
                    <label htmlFor='streakDays'>Days:</label>
                    <input
                      type='number'
                      id='streakDays'
                      value={streakDays}
                      onChange={handleStreakDaysChange}
                    />
                  </div>
                )}

                <label htmlFor='coinAmount'>Coin:</label>
                <input
                  type='number'
                  id='coinAmount'
                  value={coinAmount}
                  onChange={handleCoinAmountChange}
                />

                <button className='reward-form-btn' type='submit'>Submit</button>
              </form>

              <table className='reward-table'>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Days</th>
                    <th>Coins</th>
                  </tr>
                </thead>
                <tbody>
                  {rewardList.map((reward, index) => (
                    <tr key={index}>
                      <td>{reward.type}</td>
                      <td>{reward.days}</td>
                      <td>{reward.coins}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {displayOption === 'redeem' && (
            <div className='rewards-form'>
              <form onSubmit={handleFormSubmit} className='reward-form'>
                <label htmlFor='rewardType'>Type:</label>
                <select className='id' id='rewardType' value={rewardType} onChange={handleRewardTypeChange}>
                  <option value=''>Select a type</option>
                  <option value='Gaaming'>Gaaming</option>
                  <option value='Splash know who'>Splash know who</option>
                  <option value='Splash put you name'>Splash put you name</option>
                  <option value='Splash unlock compliments'>Splash unlock compliments</option>
                  <option value='Streak icy'>Streak icy</option>
                </select>

                {rewardType === 'Streak icy' && (
                  <div>
                    <label htmlFor='streakDays'>Days:</label>
                    <input
                      type='number'
                      id='streakDays'
                      value={streakDays}
                      onChange={handleStreakDaysChange}
                    />
                  </div>
                )}

                <label htmlFor='coinAmount'>Coin:</label>
                <input
                  type='number'
                  id='coinAmount'
                  value={coinAmount}
                  onChange={handleCoinAmountChange}
                />

                <button className='reward-form-btn' type='submit'>Submit</button>
              </form>

              <table className='reward-table'>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Days</th>
                    <th>Coins</th>
                  </tr>
                </thead>
                <tbody>
                  {rewardList.map((reward, index) => (
                    <tr key={index}>
                      <td>{reward.type}</td>
                      <td>{reward.days}</td>
                      <td>{reward.coins}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SubscriptionUserList;
