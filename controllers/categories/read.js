import Category from "../../models/Category.js"
let read = async (req, res, next) => {
    try {
        let all = await Category.find()
        return res.status(200)
            .json({
                categories: all
            })
    }
    catch (error) {
        console.log(error)
        return next(error)
    }
}
export default read