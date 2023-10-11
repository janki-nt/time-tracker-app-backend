const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoDbConnect = require('./config/dbConnect');
const timeEntryRoutes = require('./routes/time-entry.route');
const screenshotRoutes = require('./routes/screenshot.route');
const userRoutes = require('./routes/user.route');
const projectRoutes = require('./routes/project.route');
const settingRoutes = require('./routes/settings.route');
const organizationRoutes = require('./routes/organization.route');

mongoDbConnect(process.env.DATABASE_URL);
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/home', (req, res) => {
    res.send("Welcome to NODE EXPRESS application...!!!");
});

app.use('/time', timeEntryRoutes);
app.use('/screenshot', screenshotRoutes);
app.use('/users', userRoutes);
app.use('/projects', projectRoutes);
app.use('/settings', settingRoutes);
app.use('/organization', organizationRoutes);


app.listen(2000, () => {
    console.log(`Server Started at 2000 `)
})