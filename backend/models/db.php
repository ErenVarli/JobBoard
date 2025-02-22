<?php

abstract class db {

    private static $pdo;

    private static function setBdd(){
        $host = 'localhost';
        $dbname = 'finejob';
        $username = 'root'; 
        $password = '';
        try {
            // pdo connexion 
            self::$pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
            // precise plus précisement les erreurs si il y en a
            //$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Erreur de connexion : " . $e->getMessage());
        }
        
    }
    //verifie si la connexion existe déjà
    protected function getBdd(){
        if(self::$pdo === null){
            self::setBdd();
        }
        return self::$pdo;
    }
    public static function sendJSON($info){
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");
        echo json_encode($info);
    }
}