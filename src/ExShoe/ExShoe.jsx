import React, { useState } from 'react'
import { shoeArr } from './dataShoe';
import List from './List';
import Cart from './Cart';

export default function ExShoe() {
    const [listShoe, setlistShoe] = useState(shoeArr);
    // state ở đâu thì setState ở đó
    const [cart, setCart] = useState([]);
    let handleRemoveFromList = (idShoe) => {
        // console.log(idShoe)
        let newListShoe = listShoe.filter((shoe) => {
            return shoe.id != idShoe
        })
        //setState => render lại layout
        setlistShoe(newListShoe);
    }

    let handleAddToCart = (shoe) => {
        // console.log(shoe)
        // let data = {...shoe, total: 1}
        // let newCart = [...cart, data];
        // setCart(newCart)
        // find index để biết đã có trong giỏ hàng hay chưa
        let cloneCart = [...cart];
        let index = cloneCart.findIndex((item) => item.id == shoe.id)
        if (index == -1) {
            // ko tìm thấy trong giỏ hàng
            let data = { ...shoe, total: 1 }
            cloneCart.push(data);
        } else {
            cloneCart[index].total++
        }
        setCart(cloneCart)
        // th1: chưa có trong giỏ hàng => thêm và giỏ hàng
        // th2: đã có trong giỏ hàng => tăng số lượng
    }
    let handleRemoveFromCart = (idShoe) => {
        let newCart = cart.filter((shoe) => {
            return shoe.id != idShoe
        })
        setCart(newCart)
    }
    let handleChangeTotal = (idShoe, option) => {
        // option: +1 hoặc -1 / tăng hoặc giảm số lượng
        let cloneCart = [...cart];
        // tìm vị trí của sp cần thêm số lượng
        let index = cloneCart.findIndex((item) => item.id == idShoe)
        // cập nhật lại value của object vừa tìm thấy
        cloneCart[index].total = cloneCart[index].total + option
        // kiểm tra nếu total = 0 thì xoá sản phẩm khỏi giỏ hàng
        // if (cloneCart[index].total == 0) {
        //     cloneCart.splice(index, 1)
        // }
        
        // setState => render lại giao diện
        setCart(cloneCart)
    }
    return (
        <div className='row align-items-start'>
            <List dataShoe={listShoe}
                handleAddToCart={handleAddToCart}
                handleRemoveFromList={handleRemoveFromList} />
            <Cart dataCart={cart} handleRemoveFromCart={handleRemoveFromCart} handleChangeTotal={handleChangeTotal}/>
        </div>
    )
}
