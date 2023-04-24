const express = require("express")
const router = express.Router()
const Micromoment = require("../models/micromoment")

// Getting all
router.get("/", async (req, res) => {
    try {
        const micromoments = await Micromoment.find()
        res.json(micromoments)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting one by id
router.get("/:id", getMicromoment, (req, res) => {
    res.json(res.micromoment)
})

// Creating one
router.post("/", async (req, res) => {
    const micromoment = new Micromoment({
        // id: req.body.id,
        title: req.body.title,
        type: req.body.type,
        time: req.body.time,
        description: req.body.description,
        tip: req.body.tip,
        example: req.body.example
    })

    try {
        const newMicromoment = await micromoment.save()
        res.status(201).json(newMicromoment)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating one
router.patch("/:id", getMicromoment, async (req, res) => {
    /*if (req.body.id != null) {
        res.micromoment.id = req.body.id
    }*/
    if (req.body.title != null) {
        res.micromoment.title = req.body.title
    }
    if (req.body.type != null) {
        res.micromoment.type = req.body.type
    }
    if (req.body.time != null) {
        res.micromoment.time = req.body.time
    }
    if (req.body.description != null) {
        res.micromoment.description = req.body.description
    }
    if (req.body.tip != null) {
        res.micromoment.tip = req.body.tip
    }
    if (req.body.example != null) {
        res.micromoment.example = req.body.example
    }

    try {
        const updatedMicromoment = await res.micromoment.save()
        res.json(updatedMicromoment)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting one
router.delete("/:id", getMicromoment, async (req, res) => {
    try {
        await res.micromoment.remove()
        res.json({ message: "Deleted micromoment" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getMicromoment(req, res, next) {
    let micromoment
    try {
        micromoment = await Micromoment.findById(req.params.id)
        if (micromoment == null) {
            return res.status(404).json({ message: "Cannot find micromoment" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.micromoment = micromoment
    next()
}

module.exports = router