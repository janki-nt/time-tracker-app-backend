var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrganizationSchema = new Schema({
    organizationName: {
        type: String,
        default: 'Ninja Tech'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

const Organization = mongoose.model("organization", OrganizationSchema);

module.exports = Organization;

