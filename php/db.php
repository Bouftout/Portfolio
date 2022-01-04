<?php
require 'connection.php';

$requetelistepays = 'SELECT * FROM `employe` ';

foreach ($connection->query($requetelistepays) as $lesPays){
        print $lesPays['fonction'] ."\n";
}
?>