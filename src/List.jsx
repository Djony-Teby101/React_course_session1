import React from 'react'
import PropTypes from 'prop-types'

function List(props) {

    const category=props.category;
    const itemList=props.items;
    

    // fruits.sort((a, b)=>b.calories - a.calories)  //ORDRE DECROISSANT

    // FILTER DATA 
    // const lowCalFruits=fruits.filter(fruit=>fruit.calories <100)

    // const highCalFruits=fruits.filter(fruit=>fruit.calories >=100)
    // map list=>array

    const listItem = itemList.map(item => <li key={item.id}>
                                            {item.name}&nbsp;:
                                           <b>{item.calories}</b> 
                                            </li>)    

    // LOW Calories Fruits
    // const listItemLow = lowCalFruits.map(fruit => <li key={fruit.id}>
    //     {fruit.name}&nbsp;:
    //    <b>{fruit.calories}</b> 
    //     </li>)    

    // // HIGH Calories Fruits
    // const listItemHig = highCalFruits.map(fruit => <li key={fruit.id}>
    //     {fruit.name}&nbsp;:
    //    <b>{fruit.calories}</b> 
    //     </li>)    

    return (
            <>
            <h3 className='list-category'>{category}</h3>
             <ol className='list-items'>{listItem}</ol>
            </>
        
    )
}

List.propTypes={
    category:PropTypes.string,
    items:PropTypes.indexOf(PropTypes(shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories:PropTypes.number
    })))
}

List.defaultProps={
    category: "Category",
    items:[],
}
export default List