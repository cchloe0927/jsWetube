import express from "express";
import { watch, getEdit, postEdit, getUpload, postUpload } from "../controllers/videoCotroller"


const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit); //handler 추가하는 거
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;