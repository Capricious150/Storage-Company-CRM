const router = require('express').Router();
const Employee = require('../../models');

router.get('/', async (req, res) => {
        try {
            const employeeData = await Employee.findAll()
            res.status(200).json(employeeData);
        } catch (err) {
            res.status(400).json(err);
        }
    });

router.get('/:id', async (req, res) => {
        try {
            const soleEmployeeData = await Employee.findByPk()
            if (!soleEmployeeData){
                res.status(500).json({message: "No employee with that ID found!"});
                return
            }
            res.status(200).json(soleEmployeeData);
        } catch (err) {
            res.status(400).json(err);
        }
    });

router.post('/', async (req, res) => {
    try {
        const newEmployee = await Employee.create(req.body)
        res.status(200).json(newEmployee);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.update(req.body, 
            {
                where:
                {
                    id: req.params.id
                }
            })
        if(!updatedEmployee){
            res.status(500).json({message: "No Employee with that ID found!"});
            return
        }
        res.status(200).json(updatedEmployee);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedEmployee = await Employee.destroy({
            where:
            {
                id: req.params.id
            }
        })
        if (!deletedEmployee){
            res.status(500).json({message: "No employee with that ID found!"});
        }
            res.status(200).json({message: "Employee deleted!"})
    } catch (err) {
        res.status(400).json(err);
    }
});