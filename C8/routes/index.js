const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const apiSpecs = require('../api-specs.json');
const { getAllJadenja, createNewJadenje } = require('../handlers/jadenja');

const apiPrefix = process.env.API_PREFIX;

router.get(apiPrefix + '/jadenja', getAllJadenja);
router.post(apiPrefix + '/jadenja', createNewJadenje);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(apiSpecs));

module.exports = router;
