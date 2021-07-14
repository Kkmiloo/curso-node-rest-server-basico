const { Router } = require("express");
const { userGET, 
        userPUT, 
        userPOST, 
        userDELETE, 
        userPATCH } = require("../controllers/user.controller");

const router = Router();

router.get("/", userGET);

router.put("/:id", userPUT);

router.post("/", userPOST);

router.delete("/", userDELETE);

router.patch("/", userPATCH);

module.exports = router;
