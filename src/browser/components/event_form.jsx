var React = require('react');
var Fluxxor = require('fluxxor');
var Calendar = require('react-input-calendar');
var EventForm;

EventForm = React.createClass({
    render() {
        return (
            <form className="pure-form pure-form-aligned">
                <fieldset>
                    <div className="pure-control-group">
                        <label htmlFor="event-name">Event Name</label>
                        <input id="event-name" type="text" placeholder="Event Name" />
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="event-location">Location</label>
                        <input id="event-location" type="text" placeholder="Address" />
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="event-start">Event Start</label>
                        <Calendar format="MM/DD/YYYY" placeholder='Start Date' />
                        <input id="event-start-time" type="text" placeholder="Start Time" />
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="event-end">Event End</label>
                        <Calendar format="MM/DD/YYYY" placeholder='End Date' />
                        <input id="event-end-time" type="text" placeholder="End Time" />
                    </div>
                    <div className='pure-control-group'>
                        <button
                            type="submit"
                            className="pure-control-group pure-button pure-button-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        );
    }
});

module.exports = EventForm;
