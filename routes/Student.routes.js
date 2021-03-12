const {Router} = require('express');
const router = Router();

const { GetAllStudents } = require("../controller/StudentController");


router.route("/")
.get(GetAllStudents)


module.exports = router;