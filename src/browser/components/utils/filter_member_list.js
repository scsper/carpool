var startsWith = require('lodash/string/startsWith');

/**
 * Returns an object that has a member's name as both key and value.
 * The members that appear in the object are the ones that passed the filter criteria.
 *
 * @param {Array} members An array of user objects
 * @param {String} filterString Describes what starting letters we want to filter by
 */
module.exports = (members, filterString) => {
    let memberObject = {};
    let str = filterString || '';

    members.filter(member => {
        return startsWith(member.name.toLowerCase(), str.toLowerCase());
    }).forEach(member => {
        memberObject[member.name] = member.name;
    });

    return memberObject;
};
