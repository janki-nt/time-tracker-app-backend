const Organization = require("../models/organization.model");
const User = require("../models/user.model");

const saveOrganization = async (req, res, next) => {
    console.log(req.body)
    try {
        var organization = new Organization(req.body);
        await organization.save();
        return res.status(200).json({ data: organization, message: "Settings Added." });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};


const updateOrganization = async (req, res, next) => {
    try {
        const organizationUpdateData = req.body;
        var organization = await Organization.findByIdAndUpdate(req.params.id, organizationUpdateData);
        if (organization) {
            return res.status(200).json({ message: "Organization details updated", data: organization });
        } else {
            return res.status(404).json({ message: "No Organization Found", data: organization });
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const getOrganizationDataByUserId = async (req, res, next) => {
    try {
        var organization = await Organization.findOne({ owner: req.params.id });
        if (organization !== null) {
            return res.status(200).json({ message: "User details retrieved", data: organization._id });
        }
        else {
            return res.status(404).json({ message: "No User Found", data: organization });
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const getEmployeesByOrganization = async (req, res, next) => {
    try {
        const organization = await Organization.findById(req.params.id);
        var employees = [];
        if (!organization) {
            return res.status(404).json({ message: "No Organization Found", data: organization });
        } else {
            const employee = organization.employees;
            await Promise.all(employee.map(async (empId) => {
                const orgEmp = await User.findById(empId);
                if (orgEmp) {
                    employees.push(orgEmp);
                }
            }));
            return res.status(200).json({ message: "Employees Fetched", data: employees });
        }
    } catch (error) {

        return res.status(500).json({ message: error });
    }

}


module.exports = {
    saveOrganization,
    updateOrganization,
    getOrganizationDataByUserId,
    getEmployeesByOrganization
}