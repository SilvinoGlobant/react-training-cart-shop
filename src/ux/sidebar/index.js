import React from 'react';
import PropTypes from 'prop-types';


export const Sidebar = ({ isOpen = false, handleFilterList }) => (
    <div className={isOpen ? 'sidebar' : 'sidebar-close'}>
        <div className="sidebar-options">
            <div className="filters">

                <p className='filters-title'>Filters</p>
                <div className='filters-container'>
                    <div>
                        <input type="checkbox" id="basics" name="basics"
                            onChange={handleFilterList} />
                        <label for="vasics">Basics</label>
                    </div>
                </div>

            </div>
            <div className="prices">
                <p className='prices-title'>Prices</p>
                <div className='prices-container'>
                    <div>
                        <input type="radio" id="huey" name="drone" value="huey"
                            checked />
                        <label for="huey">$1 - $50</label>
                    </div>
                    <div>
                        <input type="radio" id="huey" name="drone" value="huey"
                            checked />
                        <label for="huey">$51 - $100</label>
                    </div>
                    <div>
                        <input type="radio" id="huey" name="drone" value="huey"
                            checked />
                        <label for="huey">$101 - $200</label>
                    </div>
                </div>

            </div>
            <div className="sortby">

                <p>Sort By</p>
                <div>
                    <select id="cars" name="Relevant" form="carform">
                        <option value="Relevant">Relevant</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>

            </div>
        </div>
    </div>

);

Sidebar.propTypes = {
};


