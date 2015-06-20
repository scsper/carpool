#### Data Hierarchy

* [Organization](#Organization)
	* [Service](#Service)
		* Location
		* Start Time
	* [Rides](#Rides)
		* Service
		* Time and Location
			* Departure from Campus
			* Arrival to Campus
	* [People](#People)

###### Organization
Organization refers to the campus organization or the church _hosting_ the rides.  So, Cru @ Berkeley, theHOUSE @ UCI, and theHOUSE college group could all be considered organizations.

A user may:
* Create an organization.
* View an organization.
* Ask to join an organization.

An administrator of the organization may:
* Update an organization, by:
    * Managing users
    * Managing events
    * Changing the name
* Delete an organization.

Organizations will have the following data:
* Administrators
* Drivers
* Members
* Name
* Events

###### Event
Event refers to the actual gathering that rides will go to.  7:30pm, Friday night at theHOUSE would be considered a event.

An administrator of an organization may:
* Create an event
* Update an event
* Delete an event

Events will have the following data:
* Name
* Start Date/Time
* Location
* Description
* Recurring

###### Rides
These are driven by people to services.

Rides are created by drivers or administrators.  They have the following information:
* Make of car
* Model of car
* Leave time, date
* Return time, date
* Driver

###### Users

There are three types of users:
* Administrators
* Drivers
* Passengers

When a user signs up, he must either find an organization to join or create an organization.  A user may belong to multiple organizations.

Users must share the following data:
* First name
* Last name
* Phone Number
* Email
* Photo (optional)

Drivers must share the following additional information:
* Car Make
* Car Model

Drivers may sent preferred leave and return times for an event.

#### Necessary Features
* Email reminders
	* Sent by a certain time every week
	* Able to be sent again if a person's ride changes
* Automatic sign up for drivers and passengers
* Ride reset every week

#### Keep in mind
* We need to decide the identity.  Is this a power tool for administrators to manage rides?  Or is this a tool for the every man?
* Transparent matchmaking or explicit matchmaking?
	* Transparent matchmaking would be a passenger lists what dorm and what time he'd like to be picked up.  The program finds a ride automatically.
	* Explicit matchmaking allows the passenger to choose the driver.
		* I'm thinking that explicit matchmaking is the right choice.  Most college students are friends of each other and want to have that control.
* We need to make it easy for:
	* People to cancel rides and not leave people stranded.  Perhaps some auto-join feature.
	* Passengers and drivers to automatically be linked up on creation of a ride.  For example, I would want my wife to always be able to join my car, and it'd be nice to have her on the app, so she could be removed from the car whenever needed (sickness, driving people herself, whatever).
	* People to carpool to whatever event they need.  Sometimes, it will be a retreat or a conference, not a church service.
	* Easy to trade.  Sometimes, there is a last minute shuffle that takes place, and administrators will want to step in and make sure that people end up where they need to be.
* Sometimes, a driver / administrator will want to add a person to a car without having them register (non-Christian, new person to fellowship).  This should be made possible.
* Something that happens with GoC is that some cars will come to one service or both services (ie, sunday school or not).  Perhaps we should think about making services customizable.  Some services could have Sunday school, setup, prayer meeting, etc.
* The other side of this app is people needing rides to go home from church.  Sometimes, people can get to church, but not home.  Maybe we can do something to make finding a driver easier.
* Maps integration
* Mobile app with contact information integrated

#### Login
* Facebook
* Google
* Own login service supported?  Probably not in v1, but maybe later, depending on what people think.

#### Contacts
Dmitrii A.
Benjamin D.
Patreeya P.

