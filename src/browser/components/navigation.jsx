var React = require('react');
var Navigation;

Navigation = React.createClass({
    render: function() {
        return (
            <div className='header'>
                <div className='pure-menu pure-menu-horizontal'>
                    <a className='pure-menu-heading' href=''>Organization</a>

                    <ul className='pure-menu-list'>
                        <li className='nav-item pure-menu-item pure-menu-selected'><a href='#' className='pure-menu-link'>Home</a></li>
                        <li className='nav-item pure-menu-item'><a href='#' className='pure-menu-link'>Blog</a></li>
                        <li className='nav-item pure-menu-item'><a href='#' className='pure-menu-link'>About</a></li>
                    </ul>

                    <div className='user'>
                        <span>Hello, name!</span>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Navigation;
