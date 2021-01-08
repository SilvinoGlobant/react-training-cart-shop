import React from 'react';
// import PropTypes from 'prop-types';


export default function Sidebar({
    isOpen = false,
    handleFilterList,
    handlePricesOptions,
    radioButtonActive,
    setRadioButtonActive,
    handleSortBy
}) {

    const handleSelectedRadioButton = (event) => {
        const value = +event.target.value;

        if (!setRadioButtonActive) return;
        setRadioButtonActive(value);

        if (!handlePricesOptions) return;
        handlePricesOptions(value)
    }

    const handleSelectSortBy = (event) => {
        const value = event.target.value;

        if (!handleSortBy) return;
        handleSortBy(value);
    }

    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <div className="filters">
                    <p className='filters-title'>Filters</p>
                    <div className='filters-container'>
                        <div>
                            <input type="checkbox" id="basics" name="basics"
                                onChange={handleFilterList} />
                            <label htmlFor="basics">Basics</label>
                        </div>
                    </div>
                </div>
                <div className="prices">
                    <p className='prices-title'>Prices</p>
                    <div className='prices-container'>
                        <div>
                            <input
                                type="radio"
                                id="prices-1"
                                name="prices-1"
                                value="1"
                                checked={radioButtonActive === 1 ? true : false}
                                onChange={handleSelectedRadioButton}
                            />
                            <label htmlFor="prices-1">$1 - $50</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="prices-2"
                                name="prices-2"
                                value="2"
                                checked={radioButtonActive === 2 ? true : false}
                                onChange={handleSelectedRadioButton}
                            />
                            <label htmlFor="prices-2">$51 - $100</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="prices-3"
                                name="prices-3"
                                value="3"
                                checked={radioButtonActive === 3 ? true : false}
                                onChange={handleSelectedRadioButton}
                            />
                            <label htmlFor="prices-3">$101 - $200</label>
                        </div>
                    </div>
                </div>
                <div className="sortby">
                    <p>Sort By</p>
                    <select
                        id="select-sortby"
                        name="Relevant"
                        onChange={handleSelectSortBy}
                    >
                        <option value="name">Name</option>
                        <option value="rate">Rate</option>
                        <option value="price">Price</option>
                        <option value="comments">Comments</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

// Sidebar.propTypes = {
// };


