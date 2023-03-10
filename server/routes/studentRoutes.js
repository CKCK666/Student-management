import express from "express"
import{createNewStudent,deleteStudent,getStudent,studentsList, updateStudent} from "../controllers/studentController.js"


const router =express.Router()

router.get("/",studentsList)
router.get("/:id",getStudent)
router.post("/create",createNewStudent)
router.put("/edit/:id",updateStudent)
router.delete("/:id",deleteStudent)

export default router;