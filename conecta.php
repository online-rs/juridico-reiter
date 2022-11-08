<?
$banco = "bruno572_motoristas";
$usuario = "bruno572_bruno";
$senha = "reiter@2022";
$hostname = "216.172.172.240:3306";

$conn = mysql_connect($hostname,$usuario,$senha); 
mysql_select_db($banco) or die( "Não foi possível conectar ao banco MySQL");

if (!$conn) {echo "Não foi possível conectar ao banco MySQL.
"; exit;}
else {echo "Parabéns!! A conexão ao banco de dados ocorreu normalmente!.
";}
mysql_close();
?>