<?php

    $link = 'mysql:host=localhost;dbname=toolbox';
    $usuario = 'root';
    $pass = '';

    try {

        $pdo = new PDO($link, $usuario, $pass);

        //echo 'conectado';

    } catch (PDOException $e) {
        print "¡Error!: " . $e->getMessage() . "<br/>";
        die();
    }

?>