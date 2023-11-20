import React from 'react';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineCloseCircle, AiOutlineStar } from 'react-icons/ai';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import Productdetail from './produtdetail';
import './product.css';

const Product = ({product, setProduct, detail, view, close, setClose, addtocart, rating, setRating}) => {
 const filtterproduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
 };

 const AllProducts = () => {
    setProduct(Productdetail);
 };
 
 const handleRatingClick = (value) => {
    setRating(value);
   };

 return (
    <>
      {close ? (
        <div className='product_detail'>
          <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'>
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => {
              return (
                <div className='productbox'>
                 <div className='img-box'>
                    <img src={curElm.Img} alt={curElm.Title}></img>
                 </div>
                 <div className='detail'>
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>Food That Satisfies You But Still Leaves You Craving More</p>
                    <h3>ksh.{curElm.Price}</h3>
                    <button onClick={() => addtocart(curElm)}>
                      Add To Cart
                    </button>
                 </div>
                </div>
              );
            })}
            <div className='productbox'></div>
          </div>
        </div>
      ) : null}
      <div className='products'>
        <h2># Products</h2>
        <p>Home . products</p>
        <div className='container'>
          <div className='filter'>
            <div className='categories'>
              <h3>Categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filtterproduct('meat')}>meat</li>
                <li onClick={() => filtterproduct('desert')}>desert</li>
                <li onClick={() => filtterproduct('traditional meal')}>
                 traditional meal
                </li>
                <li onClick={() => filtterproduct('fast food')}>fast food</li>
              </ul>
            </div>
          </div>
          <div className='productbox'>
            <div className='contant'>
              {product.map((curElm) => {
                return (
                 <>
                    <div className='box' key={curElm.id}>
                      <div className='img_box'>
                        <img src={curElm.Img} alt={curElm.Title}></img>
                        <div className='icon'>
                          <li onClick={() => addtocart(curElm)}>
                            <AiOutlineShoppingCart />
                          </li>
                          <li onClick={() => view(curElm)}>
                            <BsEye />
                          </li>
                          <li>
                            <AiOutlineHeart />
                          </li>
                        </div>
                      </div>
                      <div className='detail'>
                        <p>{curElm.Cat}</p>
                        <h3>{curElm.Title}</h3>
                        <div className='rating'>
                             {[...Array(5)].map((_, i) => (
                                 <AiOutlineStar  key={i}
                                 onClick={() => handleRatingClick(i + 1)}
                                 className={rating >= i + 1 ? 'selected' : ''}/>))}
                                           </div>
                        <h3>ksh.{curElm.Price}</h3>
                      </div>
                    </div>
                 </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
 );
};

export default Product
