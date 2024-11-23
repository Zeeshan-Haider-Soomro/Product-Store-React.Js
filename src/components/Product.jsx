import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingOutlined } from '@ant-design/icons';
import { productType } from "../store/actions/ActionTypes";
import useSelection from "antd/es/table/hooks/useSelection";


const { Meta } = Card;
const Product = ({data}) => {

    const dispatch = useDispatch()
    const cartData = useSelector((state)=>state)
    console.log(cartData);
    

    const {id,title,description,image,price,category} = data 

  return (
    <div>
        <Card
    hoverable
    cover={<img className="w-[150px] h-[150px] object-contain" alt="example" src={image} />}
  >
    <p>Category : {category}</p>
    <Meta title={title} description={description.slice(0,100)} />
    <div className="flex justify-between py-5 text-2xl">
    <p className="text-red-600">Price : {price}$</p>
    <p className="text-green-700 top-0 right-0 absolute p-5 text-3xl"><ShoppingOutlined onClick={()=>dispatch({type:productType.CART_PRODUCT, payload:data})}/></p>
    </div>
  </Card>
    </div>
  )
}

export default Product