var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    projectName: {
        type: String,
    },
    clientName: {
        type: String
    },
    projectManager: {
        type: String
    },
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization',
    }
}, { timestamps: true });

const Project = mongoose.model("projects", ProjectSchema);

module.exports = Project;

