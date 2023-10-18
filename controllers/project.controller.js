const Project = require("../models/project.model");


const saveProject = async (req, res, next) => {
    console.log(req.body)
    try {
        var project = new Project(req.body);
        await project.save();
        return res.status(200).json({ data: project, message: "Project Added." });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};


const getProjectsByOrgId = async (req, res, next) => {
    try {
        var project = await Project.find({ organizationId: req.params.id });
        if (project !== null) {
            return res.status(200).json({ message: "Project details retrieved", data: project });
        }
        else {
            return res.status(404).json({ message: "No Project Found", data: project });
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};


const getProjectsById = async (req, res, next) => {
    try {
        var project = await Project.find({ _id: req.params.id });
        if (project !== null) {
            return res.status(200).json({ message: "Project details retrieved", data: project });
        }
        else {
            return res.status(404).json({ message: "No Project Found", data: project });
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

// const updateSettingsByUserId = async (req, res, next) => {
//     try {
//         const settingsUpdateData = req.body;
//         var project = await Project.findOneAndUpdate({ userId: req.params.id }, settingsUpdateData);
//         if (project) {
//             return res.status(200).json({ message: "Project details updated", data: project });
//         } else {
//             return res.status(404).json({ message: "No Project Found", data: project });
//         }
//     } catch (error) {
//         return res.status(500).json({ message: error });
//     }
// };


module.exports = {
    saveProject,
    getProjectsByOrgId,
    getProjectsById
}