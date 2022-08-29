import React from 'react';

const Categories = () => {
    return (
        <div className='col-2 Category mt-3'>
            <h3 className='mt-2 mb-3'>Filter</h3>
            <div className='text-start ms-3 filter-input'>
                <label className='filter__label' htmlFor="all"><span className="checkmark"></span><input name='filter' id='all' type="radio" /> All</label><br />
                <label className='filter__label' htmlFor="free"><span className="checkmark"></span><input name='filter' id='free' type="radio" /> Free</label><br />
                <label className='filter__label' htmlFor="notFree"><span className="checkmark"></span><input name='filter' id='notFree' type="radio" /> Not Free</label>
            </div>
        </div>
    );
};

export default Categories;