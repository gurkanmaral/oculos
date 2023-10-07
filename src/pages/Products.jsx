import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../data'
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

const Products = () => {
   
  

  const id = useParams().id
  const filterId = parseInt(useParams().id);
  const [activeText, setActiveText] = useState('');
  const [activeTab, setActiveTab] = useState(null);
  
  
  const handleClick = (text, tab, e) => {
    e.preventDefault();
    if (activeTab === tab) {
      setActiveText('');
      setActiveTab(null);
    } else {
      setActiveText(text);
      setActiveTab(tab);
    }
  };
  const [selectedImg,setSelectedImg] = useState("img")
  const filteredData = data.filter((item) => item.isProduct && item.id !== filterId)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);
 
 console.log(activeTab) 

 
  return (
    <div className='products'>
      <div className='products-container'>
          <div className='top'>
              <div className='left'>
                  <div className='products-images'>
                      <img src={data[id]?.img1} alt="" onClick={e=>setSelectedImg("img")}/>
                      
                      {data[id].img2.includes('.mp4') ? <video 
                      src={data[id].img2}
                      loop 
                      muted
                      controls={false}
                      type="video/mp4"
                      autoPlay
                      playsInline 
                      onClick={e=>setSelectedImg("img2")}
                      /> 
                      : <img src={data[id]?.img2} alt=""onClick={e=>setSelectedImg("img2")}/>
                      }
                      <img src={data[id]?.img3} alt=""onClick={e=>setSelectedImg("img3")}      />
                      {data[id]?.img4 && <img src={data[id].img4} alt=""onClick={e=>setSelectedImg("img4")} />}
                      {data[id]?.img5 && <img src={data[id].img5} alt=""onClick={e=>setSelectedImg("img5")} />}
                  </div>
                  <div className='products-mainImg '>
                  {selectedImg === 'img2' && data[id].img2.includes('.mp4') ? (
    <video
      src={data[id].img2}
      loop
      muted
      controls={false}
      type='video/mp4'
      autoPlay
      playsInline // Add the playsInline attribute
     
    />
  ) : (
    <img
      src={
        selectedImg === 'img'
          ? data[id].img1
          : selectedImg === 'img2'
          ? data[id].img2
          : selectedImg === 'img3'
          ? data[id].img3
          : selectedImg === 'img4'
          ? data[id].img4
          : data[id].img5
      }
      alt=''
    />
  )}
 </div>
                 <div className='right '>
                     <h1 className='text-[50px] font-bold'style={{ wordBreak: 'break-all' }}>
                      {data[id].name}</h1>

                      <p className='text-[30px] mt-[20px] '>{data[id]?.price}.00$</p>
                      <div className='size'>
                        <div className='size-box'>M</div>
                        <div className='size-box'>L</div>
                        <div className='size-box'>XL</div>
                        <div className='size-box'>XXL</div>
                      </div>
                      
                      <div className='w-full button-div'>
                        <button className='mt-[50px] product-button '>
                        <a href={data[id].etsy} target="_blank" rel="noopener noreferrer">
                         ETSY
                        </a>           
                        </button>
                      </div>

                      <div>
                      <p className='mt-[50px] product-care-text care-text '>
                          OCULOS 34 Oversize Unisex White T-shirt is made from 100% cotton fabric and features a stylish design that you can easily wear. This shirt is suitable for both women and men, and it has an oversize cut that will perfectly fit every body type.<br/>
                        <br />
                          <span className='model-size'>Model Size M Boy 6'0 Girl 5'4</span>                                                       
                        </p> 
                        </div>  
                        <div className='product-details'>
                          <div className='product-details-h3'>
                            <div className='' >
                              <div className='flex justify-between items-center plus'
                              onClick={(e) => handleClick('PRODUCT', 'PRODUCT', e)}>
                              <h3 
                            className={activeTab === 'PRODUCT' ? 'active' : ''}>PRODUCT CARE</h3>
                            {activeTab === 'PRODUCT' ? <BiMinus /> : <BsPlus />}
                              </div>
                            
                            {activeTab === 'PRODUCT' && <p className='product-care-text product-p'>
                            We use the latest direct-to-garment (DTG) printing technology and high-quality inks that won't fade for a long time if cared for correctly.

                                This t-shirt can be machine-washed cold, inside-out on a gentle cycle with a mild detergent. Use non-chlorine bleach only when necessary. You shouldn't use any fabric softeners or dry-clean the items.

                                The t-shirt can be tumble-dried on a low cycle, but hang-dry works best. When it comes to ironing, use cool iron inside-out. Don't iron the print.

                                Follow these instructions carefully to avoid fading and cracking of the print, and shrinking the garment that can occur if you wash or dry it on a high setting.
                            </p>}
                            </div>
                            <div>
                              <div className='flex justify-between items-center plus'
                              onClick={(e) => handleClick('FEATURES' ,'FEATURES',e)}>
                                <h3 
                              className={activeTab === 'FEATURES' ? 'active' : ''}>FEATURES</h3>
                              {activeTab === 'FEATURES' ? <BiMinus /> : <BsPlus />}
                              </div>                         
                            {activeTab === 'FEATURES' && <p className='product-care-text'>
                              -oversize fit <br />
                              -unisex fit <br />
                              -round neckline
                              </p>}
                            </div>
                              <div>
                                <div className='flex justify-between items-center plus'
                                onClick={(e) => handleClick('FABRIC','FABRIC',e)}>
                                <h3 
                            className={activeTab === 'FABRIC' ? 'active' : ''}>FABRIC DETAILS</h3>
                            {activeTab === 'FABRIC' ? <BiMinus /> : <BsPlus />}
                                </div>
                            
                            {activeTab === 'FABRIC' && <p className='product-care-text'>
                            - 100% organic cotton <br/>- machine wash 30 degres max  <br/>- do not tumble dry  <br/>- iron low heat inside out
                              </p>}
                              </div>
                           
                          </div>
                          
                        </div>

                     </div>  
               </div>
              
          </div>       
          <div className='bottom'>
              <div className=' flex justify-center you-may-also-like'>
                <h1 className='text-[35px]'>You may also like</h1>
              </div>
                <div className='filtered-data '>
                     {filteredData.map((product)=>(
                      <Link to={`/home/products/${product.id}`} key={product.id} className='cursor-pointer'>                 
                        <div  className=' filtered-data-img'>
                            <img src={product.img1} alt="" width={250} height={250}
                            className=""
                            />
                            <div className='flex justify-between mt-[10px] filtered-data-div'>
                            <p className='font-bold ' >{product.name}</p>
                            <p className='' >${product.price}.00</p>
                            </div>
                        </div>
                        </Link>
                      ))}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Products