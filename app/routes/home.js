var dbConnect = require('../../config/config_db.js');

module.exports = function(app){

	var connection = dbConnect();

	app.get('/', function(req, res){

		connection.query("SELECT id AS ID_do_Chamado,name AS Titulo_do_Chamado,solution AS solucao,date AS Data_de_Abertura_do_Chamado,solvedate AS Data_da_Solucao, sec_to_time(solve_delay_stat) AS tempo_de_resolucao_do_chamado FROM glpi_tickets WHERE entities_id =0 AND DATE BETWEEN '2017-03-01 08:00:00' AND '2017-03-31 18:00:00';", function(erro, result){


			res.render('home/index', {infos: result});
			console.log(erro);
		})

	})
}