import React, { useState } from 'react';
import MainMenu from '../MainMenu';

const Ecommerce = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [image, setImage] = useState(null);
  const [productList, setProductList] = useState([]);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleAddProduct = () => {
    if (productName && description && price && discount && image) {
      const product = {
        id: Date.now(),
        productName: productName,
        description: description,
        price: price,
        discount: discount,
        image: image,
      };

      setProductList([...productList, product]);
      setProductName('');
      setDescription('');
      setPrice('');
      setDiscount('');
      setImage(null);
    }
  };

  const handleDeleteProduct = (id) => {
    const updatedProductList = productList.filter((product) => product.id !== id);
    setProductList(updatedProductList);
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className="search1">
            <h1 className='reg'>Ecommerce</h1>
          </div>

          <div className='ecom-top-row'>
            <div className="container4">
              <div className="form-field">
                <label htmlFor="productName">Product Name:</label>
                <input
                  type="text"
                  id="productName"
                  value={productName}
                  onChange={handleProductNameChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="image">Image:</label>
                <input type="file" id="image" onChange={handleImageUpload} accept="image/*" />
              </div>

              <div className="form-field">
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={handlePriceChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="discount">Discount:</label>
                <input
                  type="number"
                  id="discount"
                  value={discount}
                  onChange={handleDiscountChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="description">Description:</label>
                <textarea
                  className='box'
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                ></textarea>
                <button className="buttone" onClick={handleAddProduct}>Submit</button>
              </div>
            </div>
          </div>

          <div className="table4">
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((product) => (
                  <tr key={product.id}>
                    <td>{product.productName}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.discount}</td>
                    <td>
                      <img src={URL.createObjectURL(product.image)} alt="Product" style={{ height: '100px', width: '100px' }} />
                    </td>
                    <td>
                      <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Ecommerce;
