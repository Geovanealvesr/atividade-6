const Automobile = require('./Automobile');
const AutomobileDetails = require('./AutomobileDetails');

AutomobileDetails.belongsTo(Automobile, {
    foreighKey: "automobile_id",
});

Automobile.hasOne(AutomobileDetails, {
    foreighKey: "automobile_id",
   }
);

module.exports = {Automobile, AutomobileDetails}