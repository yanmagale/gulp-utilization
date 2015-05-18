//Instancias dos modulos a serem utilizados
var gulp = require('gulp');
var psi = require('psi');
var site = 'http://www.terra.com.br/';
var key = '';
var strategy = 'desktop';

/*Utilizando o modulo PSI. */

//1 - Uma utilizacao mais simples possivel
gulp.task('psi-easy', function () {
    return psi(site, function (err, data) { 
	console.log(data.formattedResults);
    });
});

// Uma utilizacao, utilizando todos os parametros que o plugin permite
gulp.task('psi', function () {
    return psi(site, {
        nokey: 'true', //Sem a presenca de uma chave, disponível em https://developers.google.com/speed/docs/insights/v1/getting_started
        strategy: strategy,//Formas de analise da sua pagina. Parametros possiveis - desktop, mobile
	locale: 'pt_br', //Local de onde sera efetuado o acesso ao site. Padrao - en_US
	threshold: 90 //Pontuacao minima necessaria para a aprovacao do teste. Padrao - 70

    }, function (err, data) { //Callback com a resposta do PageSpeed
	console.log(data.formattedResults); //Resultado com as melhorias a serem aplicadas, de acordo com as regras do PSI
        console.log(data.score);//Pontuacao obtida
        console.log(data.pageStats);//Algumas informações sobre a página, como tamanho dos arquivos trafegados, quantidade de resources, etc
    });
});

/*Este segundo tipo de report traz um retorno visualmente melhor, informando de forma mais clara os erros a serem corrigidos.
É um report mais próximo do exibido em https://github.com/addyosmani/psi*/

//1 - Uma utilizacao mais simples possivel
gulp.task('output-easy', function () {
    return psi.output(site,function (err) {
	console.log(err);
    });
});

// Uma utilizacao, utilizando todos os parametros que o plugin permite
gulp.task('output', function () {
    return psi.output(site, {
        nokey: 'true', 
        strategy: strategy,
	locale: 'pt_BR', 
	threshold: 90 
    },function (err) {
	console.log(err); 
    });
});

