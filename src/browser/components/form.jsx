var React = require('react');
var Fluxxor = require('fluxxor');
var Form;

Form = React.createClass({
    render: function() {
        return (
            <form className="pure-form pure-form-aligned">
                <fieldset>
                    <div className="pure-control-group">
                        <label htmlFor="name">Username</label>
                        <input id="name" type="text" placeholder="Username" />
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="Password" />
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" placeholder="Email Address" />
                    </div>

                    <div className="pure-control-group">
                        <label htmlFor="foo">Supercalifragilistic Label</label>
                        <input id="foo" type="text" placeholder="Enter something here..." />
                    </div>

                    <div className="pure-controls">
                        <label htmlFor="cb" className="pure-checkbox">
                            <input id="cb" type="checkbox" /> I have read the terms and conditions
                        </label>

                        <button type="submit" className="pure-button pure-button-primary">Submit</button>
                    </div>
                </fieldset>
            </form>
        );
    }
});

module.exports = Form;
