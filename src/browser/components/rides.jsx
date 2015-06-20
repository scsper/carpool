var React = require('react');
var Fluxxor = require('fluxxor');
var Rides;

Rides = React.createClass({
    render: function() {
        return (
            <div className="pure-u-1-2">
                <ul>
                    <li className='ride-list-item'>
                        <img className='ride-image' src="assets/person.jpg"/>
                        <h2 className='ride-driver'>Scott Sperling</h2>
                        <h3 className='ride-car'>Ford Expedition</h3>
                        <p className='ride-date'>Leaving at 6:30pm on 7/29/2015</p>
                        <p className='ride-date'>Returning at 9:00pm on 7/29/2015</p>
                    </li>

                    <li className='ride-list-item'>
                        <img className='ride-image' src="assets/person.jpg"/>
                        <h2 className='ride-driver'>Dmitrii Abramov</h2>
                        <h3 className='ride-car'>Jeep Wrangler</h3>
                        <p className='ride-date'>Leaving at 5:30pm on 7/29/2015</p>
                        <p className='ride-date'>Returning at 10:00pm on 7/29/2015</p>
                    </li>

                    <li className='ride-list-item'>
                        <img className='ride-image' src="assets/person.jpg"/>
                        <h2 className='ride-driver'>Tim Oswald</h2>
                        <h3 className='ride-car'>Toyota Corolla</h3>
                        <p className='ride-date'>Leaving at 6:00pm on 7/29/2015</p>
                        <p className='ride-date'>Returning at 10:15pm on 7/29/2015</p>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Rides;
