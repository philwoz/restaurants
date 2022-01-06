import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"
import ReviemsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/").get(RestaurantsCtrl.apiGetRestaurants)
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById)
router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines)

router
    .route("/review")
    .post(ReviemsCtrl.apiPostReview)
    .put(ReviemsCtrl.apiUpdateReview)
    .delete(ReviemsCtrl.apiDeleteReview)

export default router