const axios = require('axios');
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray');

// index(Lista), show(Unico), store(Criar), update(Alterar), destroy(deletar)

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        console.log(devs.github_username)
        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`http://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data;
            console.log(techs + "Dev controller")
            //const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }

        return response.json(dev);
    },

    async update(){

    },

    async destroy(request, response){

        let dev = await Dev.findOne({ github_username });
        console.log(devs.github_username)
        return response.json(devs);
    },
};