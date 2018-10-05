module.exports = {

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_houses()
            .then(houses => res.status(200).send(houses))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Something went horribly, terribly wrong' });
                console.log(err);
            })
    },

    addHouse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, address, city, state, zip } = req.body;

        dbInstance.add_house({name, address, city, state, zip })
            .then(() => res.status(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Something went wrong.' });
                console.log(err);
            })
    },

    deleteHouse: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req

        dbInstance.delete_house(params.id).
            then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "That's not a moon" })
            })
    }
}