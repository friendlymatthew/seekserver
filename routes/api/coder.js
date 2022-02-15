const express = require("express");
const router = express.Router();
const Clip = require("../../models/Clip");
const { check, validationResult } = require("express-validator");

router.post("/post",[
    check("videoSrc").notEmpty().isString(),
    check("market").notEmpty().isString(),
    check("title").notEmpty().isString(),
    check("snippet").notEmpty().isString(),
    check("coder").notEmpty().isString(),
    check("seek").notEmpty().isString(),
    check("start").notEmpty().isNumeric(),
    check("stop").notEmpty().isNumeric(),
    check("id").notEmpty().isNumeric(),
], async(req, res) => {

    const schemaValidationErrors = validationResult(req);
    console.log(":::SchemaValidation", schemaValidationErrors);

    if(!schemaValidationErrors.isEmpty()) {
        return res.status(404).send({
            message: "The inputs you entered to register are invalid."
        })
    }


    Clip.findOne({_id: req.body._id}).then(clip => {
        if(clip) {
            return res.status(404).send({
                message: "Clip already exists or invalid request body."
            })
        } else {
            const newClip = new Clip(req.body);
            console.log(newClip);
            newClip.save().catch(err => console.log(err));
            return res.status(201).send(newClip);
        
        }
    })
})

module.exports = router;