const express = require("express");
const router = express.Router();
const Clip = require("../../models/Clip");
const { check, validationResult } = require("express-validator");

router.post("/post", async(req, res) => {

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