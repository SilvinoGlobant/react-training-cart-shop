import React from 'react';
import PropTypes from 'prop-types';


export const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar-options">
            <div className="filters">
                <div>
                    <p>Filters</p>
                    <div>
                        <div>
                            <input type="checkbox" id="basics" name="basics"
                                checked />
                            <label for="vasics">Basics</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prices">
                <div>
                    <p>Prices</p>
                    <div>
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
            </div>
            <div className="sortby">
                <div>
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
    </div>

);

Sidebar.propTypes = {
};


