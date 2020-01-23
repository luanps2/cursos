const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-iiowd.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,//adicionado para corrigir erro DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
    useNewUrlParser: true//adicionado para corrigir erro DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
});

app.use(express.json());
app.use(routes);

app.listen(3333);