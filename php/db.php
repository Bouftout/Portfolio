<?php
$dbh = new PDO('mysql:host=mysql-pastre.alwaysdata.net;dbname=pastre_indexsql', 'pastre', 'totoni13');
// utiliser la connexion ici
$sth = $dbh->query('SELECT * FROM game');
echo '<p>' + '</p>';
// et maintenant, fermez-la !
$sth = null;
$dbh = null;
?>