import "./Product.css"
function Product({name,img1,price,ship,Sname}){
    return(
        <>
            <div className="mainDiv">
                <img src={img1} alt="img"></img>
                <div className="innerDiv1">
                    <h3>{name}</h3>
                </div>
                <div className="innerDiv4">
                    <h5>{Sname}</h5>
                </div>
                <div className="innerDiv2">
                    <h3>$ {price} AUD</h3>
                    <p>+&nbsp; {ship}  shipping</p>
                </div>
                <div className="innerDiv3">
                    <h4>Add To Cart</h4>
                    <h4>Make Offer</h4>
                </div>
            </div>
        </>
    );
}
export default Product;