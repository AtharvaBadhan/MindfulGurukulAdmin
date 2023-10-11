import React, { useState } from 'react';
import MainMenu from '../MainMenu';
import FeatureTag from '../Components/FeatureTag';

const AddSubscription = () => {
  const [subscriptionName, setSubscriptionName] = useState('');
  const [price, setPrice] = useState('');
  const [timing, setTiming] = useState('');
  const [duration, setDuration] = useState('');
  const [status, setStatus] = useState('');
  const [features, setFeatures] = useState([]);
  const [subscriptionList, setSubscriptionList] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleSubscriptionNameChange = (event) => {
    setSubscriptionName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleTimingChange = (event) => {
    setTiming(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleFeaturesChange = (event) => {
    setFeatures(event.target.value.split('\n'));
  };

  const handleAddSubscription = () => {
    if (subscriptionName && price && timing && duration && status) {
      const subscription = {
        id: Date.now(),
        name: subscriptionName,
        price: price,
        timing: timing,
        duration: duration,
        status: status,
        features: features,
      };

      setSubscriptionList([...subscriptionList, subscription]);
      setSubscriptionName('');
      setPrice('');
      setTiming('');
      setDuration('');
      setStatus('Active');
      setFeatures([]);

      // Close the modal after adding the subscription
      closeAddModal();
    }
  };


  const handleDeleteSubscription = (id) => {
    const updatedSubscriptionList = subscriptionList.filter(
      (subscription) => subscription.id !== id
    );
    setSubscriptionList(updatedSubscriptionList);
  };

  const handleEditSubscription = (id) => {
    // Handle the edit functionality for a subscription plan
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddSubscription();
    closeAddModal();
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className="search1">
            <h1 className='reg'>Add Subscription</h1>
            <button onClick={openAddModal}>Add Subscription Plan</button>
          </div>

          <div style={{ marginTop: '20px' }}>

            {subscriptionList.map((subscription) => (
              <div className="container" key={subscription.id}>
                <div className="col-md-4 col-sm-6">
                  <div className="pricingTable">
                    <div className="pricingTable-header">
                      <h3 className="title">{subscription.name}</h3>
                      <div className="price-value">
                        <span className="price-currency">${subscription.timing}</span>
                        <span className="amount">{subscription.price}</span>
                        <span className="duraton">{subscription.duration} {subscription.status}</span>
                      </div>
                    </div>
                    <ul>
                      {subscription.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="pricingTable-signup">
                      <button onClick={() => handleDeleteSubscription(subscription.id)}>
                        Delete
                      </button>
                      <button onClick={() => openAddModal(subscription.id)}>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
          {/* <div style={{ marginTop: '20px' }}>
        <div className="subscription-container">
          {subscriptionList.map((subscription) => (
            <div
              key={subscription.id}
              className="subscription-box"
            >
              <h2>{subscription.name}</h2>
              <p>Price: {subscription.price}</p>
              <p>Timing: {subscription.timing}</p>
              <p>Duration: {subscription.duration}</p>
              <p>Status: {subscription.status}</p>
              <p>Features:</p>
              <ul>
                {subscription.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div>
                <button onClick={() => handleDeleteSubscription(subscription.id)}>
                  Delete
                </button>
                <button onClick={() => openAddModal(subscription.id)}>
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}

          <div>
            {isAddModalOpen && (
              <div>
                <div className="add-sub-admin-modal" onClick={closeAddModal} ></div>
                <form className="add-sub-admin-form" onSubmit={handleSubmit}>
                  <div className='title-sec'>
                    <h2 className='reg'>Add Subscription Plan</h2>
                  </div>
                  <div className='sub-name'>
                    <div>
                      <label htmlFor="subscriptionName">Subscription Name:</label>
                      <input
                        type="text"
                        id="subscriptionName"
                        value={subscriptionName}
                        onChange={handleSubscriptionNameChange}
                      />
                    </div>
                    <br />
                    <div className='price-timing'>
                      <div>
                        <label htmlFor="price">Price:</label>
                        <input
                          type="number"
                          id="price"
                          value={price}
                          onChange={handlePriceChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="timing">Timing:</label>
                        <select className='id'
                          id="timing"
                          value={timing}
                          onChange={handleTimingChange}
                        >
                          <option value="">Select Timing</option>
                          <option value="Daily">Daily</option>
                          <option value="Weekly">Weekly</option>
                          <option value="Monthly">Monthly</option>
                          <option value="Yearly">Yearly</option>
                        </select>
                      </div>
                    </div>
                    <br />
                    <div className='dur-tus'>
                      <div>
                        <label htmlFor="duration">Duration:</label>
                        <input
                          type="text"
                          id="duration"
                          value={duration}
                          onChange={handleDurationChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="status">Status:</label>
                        <select className='id' id="status" value={status} onChange={handleStatusChange}>
                          <option value="Active">Active</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                    </div>
                    <br></br>
                    <div className='filter-list'>
                      <label htmlFor="features" type="text" id="features" value={features} onClick={handleFeaturesChange}> Feature list: <FeatureTag /></label>
                    </div>
                  </div>
                  <div className='buttonCont'>
                    <button type="submit" className="submit" onClick={handleAddSubscription}>
                      Save
                    </button>
                    <button className='buttoncancel' type="button" onClick={closeAddModal}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubscription;
