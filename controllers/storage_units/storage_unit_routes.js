const router = require('express').Router();
const { Units, Customers } = require('../../models');
const path = require('path');

// 4 Redirects in case our customers do some squirrely things with the navbar or URL
router.get('/customers.html', (req, res) => {

    if (req.session.loggedIn !== true){
        res.redirect('/');
      }

    res.redirect("../customers.html")});


router.get('/issues.html', (req, res) => {

    if (req.session.loggedIn !== true){
        res.redirect('/');
      }

    res.redirect("../issues.html")
});
router.get('/employee.html', (req, res) => {
    
    if (req.session.loggedIn !== true){
        res.redirect('/');
      }
    
    res.redirect("../employee.html")
});

router.get('/storage', (req, res) => { 

    if (req.session.loggedIn !== true){
        res.redirect('/');
      }

    res.redirect("../storage")
});


// GET ALL UNITS, Serves units.handlebars
router.get('/', async (req, res) => {
    console.log('GET request to CUSTOMER received');

    if (req.session.loggedIn !== true){
        res.redirect('/');
      }

    try {
        const storageUnits = await Units.findAll({
            include: [
                {model: Customers}
            ]
        });

        let available = 0;
        let unavailable = 0;

        const renderedUnits = storageUnits.map((units)=>{
            if (units.available) {
                available++
                
            } else {
                unavailable++
                
            }

            return units.get({plain: true})
        })
        console.log(renderedUnits);

        res.status(200).render('units', {
            renderedUnits,
            available,
            unavailable

        });
        console.log('GET request to UNIT successful');



    } catch (err) {
        res.status(400).json(err)
        console.log('GET request to UNIT failed');

    }
});

// GET UNITS BY ID, does a GET ALL and a GET BY ID and serves both to
// unitsbyid.handlebars
router.get('/:id', async (req, res) => {

    if (req.session.loggedIn !== true){
        res.redirect('/');
      }

    try {
        const storageUnits = await Units.findAll({
            include: [
                {model: Customers}
            ]
        });
        let available = 0;
        let unavailable = 0;
        

        const renderedUnits = storageUnits.map((units)=>{
            if (units.available) {
                available++
                
            } else {
                unavailable++
                
            }
            return units.get({plain: true})
        })


        const soleStorageUnit = await Units.findByPk(req.params.id,
            {
                include: [
                    {model: Customers}
                ]
            })
        console.log(soleStorageUnit, req.params.id)
        if (!soleStorageUnit){
            res.status(500).json({message: "No Storage Unit with that ID found!"});
            return
        }

        const renderedUnit = soleStorageUnit.get({plain: true});
        res.status(200).render('unitsbyid', {
            renderedUnits,
            renderedUnit,
            available,
            unavailable

        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// A simple redirect, to solve a bug where sometimes users would be served /storage/storage/:id depending
// on how they use the Units page.
router.get('/storage/:id', (req, res) => {

    if (req.session.loggedIn !== true){
        res.redirect('/');
      }

    const storageId = req.params.id;
    res.redirect(`../${storageId}`)
})

router.post('/', async (req, res) => {
    try {
        const newStorageUnit = await Units.create(req.body)
        res.status(200).json(newStorageUnit);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn === true){
      req.session.destroy(() => {
        res.status(204).redirect('/')
      })
    }
  });

router.put('/:id', async (req, res) =>{
    try {
        const updatedStorageUnit = await Units.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if(!updatedStorageUnit) {
            res.status(500).json({message: "No Storage Unit with that ID found!"})
            return
        }
        res.status(200).json(updatedStorageUnit);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedStorageUnit = Units.destroy({
            where:
            {
                id: req.params.id
            }
        })
        if(!deletedStorageUnit){
            res.status(500).json({message: "No Storage Unit with that ID found!"})
            return
        }
        res.status(200).json({message: "Storage Unit removed!"})
    } catch (err) {
        res.status(400).json(err)
    }
});



module.exports = router;