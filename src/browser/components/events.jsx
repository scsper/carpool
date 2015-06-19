var React = require('react');
var Fluxxor = require('fluxxor');
var Events;

Events = React.createClass({
    render: function() {
        return (
            <div className="pure-u-1-2">
                <ul>
                    <li className='event-list-item'>
                        <div className='event-headers'>
                            <h2 className='event'>Event 1</h2>
                            <h3 className='date'>7/14/2015 at 7:00pm</h3>
                        </div>
                        <p className='event-description'>Here is a description for Event 1</p>
                    </li>

                    <li className='event-list-item'>
                        <div className='event-headers'>
                            <h2 className='event'>Event 2</h2>
                            <h3 className='date'>7/16/2015 at 7:00pm</h3>
                        </div>
                        <p className='event-description'>
                            Here is a long description for Event 2.  It just goes on and on and on and on.
                            I wish I had some dummy text to stick in here, but I am too lazy so I am making
                            my own hand generated lorem ipsum.  woo.  obviously, we should truncate this somehow.
                        </p>
                    </li>

                    <li className='event-list-item'>
                        <h2 className='event'>Event 1</h2>
                        <h3 className='date'>7/18/2015 at 7:00pm</h3>
                        <p className='event-description'>Here is a description for Event 1</p>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Events;
