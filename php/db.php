<?php

$connection=mysqli_connect("mysql-pastre.alwaysdata.net", "pastre", "totoni13", "pastre_indexsql");
if (!$connection){
    die ("Connection impossible");
}
else {
    $requete=mysqli_query($connection,"SELECT * FROM game");
}
?>