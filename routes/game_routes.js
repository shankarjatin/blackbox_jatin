const express = require("express");
const router = express.Router();
const game_controller = require("./../controllers/game_controllers.js");
const auth_middleware = require("./../middlewares/auth_middleware.js");
const game_middleware = require("./../middlewares/game_middleware.js");

router.get("/",
	game_controller.index
);


router.get("/game",
	auth_middleware.check_login,
	game_middleware.check_game_timing,
	game_controller.game
);

router.post("/game",
	auth_middleware.check_login,
	game_middleware.check_game_timing,
	game_controller.check
);

router.post("/submit",
	auth_middleware.check_login,
	game_controller.submit
);

router.get("/submit",
	auth_middleware.check_login,
	game_controller.submit
);



router.get("/test", function (req, res) {
	res.send(req.isAuthenticated())
});

module.exports = router;
