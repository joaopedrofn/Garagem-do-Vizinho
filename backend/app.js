const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4001;

let users = [];
let garages = [];

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/users', (req, res, next) => {
	res.send(users);
});
app.put('/users', (req, res, next) => {
	if(req.body.name && req.body.email && req.body.cpf && req.body.pass){
		users.push(req.body);
		res.send(req.body);
	} else{
		let err = new Error("Verificar as informações do usuário!");
		err.status = 400;
		return next(err);
	}
});

app.listen(PORT, () => {
	console.log(`Listening at port ${PORT}!`);
})