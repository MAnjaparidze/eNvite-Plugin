import React from 'react'

export default function BagItem() {
    return (
        <div className="bagItem__container">
            <div className="bagItem__firstSection">
                <img src="https://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/images/2018/09/3522cca0-92e8-4b8f-9f4e-3e1ebc84c98a.jpg?itok=eIsoDK3T"
                    className="bagItem__img" />
                <span className="bagItem__name">Very coll green bag for woman</span>
            </div>
            <div className="bagItem__secondSection">
                <div className="bagItem__price">
                    <span className="bagItem__price__dollars">$19</span>
                    <span className="bagItem__price__cents">90</span>
                </div>
                <div className="bagItem__oldPrice">
                    <hr className="bagItem__oldPrice__diagonalLine" />
                    <span className="bagItem__price__dollars">$19</span>
                    <span className="bagItem__price__cents">90</span>
                </div>
            </div>
        </div>
    )
}
