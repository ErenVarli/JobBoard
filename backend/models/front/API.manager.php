<?php
require_once "models/db.php";

class APIManager extends db{
    public function getDBAdvertisements(){
        $req = "SELECT * from advertisements";
        $stmt = $this->getBdd()->prepare($req); // connexion à la db et prepare la req
        $stmt->execute();                      
        $ad = $stmt->fetchAll(PDO::FETCH_ASSOC); // met les infos data dans une var. assoc permet d'avoir seulement les champs des tables
        $stmt->closeCursor();                    // close la connexion
        return $ad;
    }
    public function getDBCompany(){
        $req = "SELECT * from companies";
        $stmt = $this->getBdd()->prepare($req); 
        $stmt->execute();                      
        $company = $stmt->fetchAll(PDO::FETCH_ASSOC); 
        $stmt->closeCursor();                   
        return $company;
    }
    public function getDBPeople(){
        $req = "SELECT * from peoples";
        $stmt = $this->getBdd()->prepare($req); 
        $stmt->execute();                      
        $people = $stmt->fetchAll(PDO::FETCH_ASSOC); 
        $stmt->closeCursor();                   
        return $people;
    }
    public function getDBAdCompany($company_id){
        $req = "SELECT * from advertisements WHERE company_id = :company_id";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->execute();                      
        $adCompany = $stmt->fetchAll(PDO::FETCH_ASSOC); 
        $stmt->closeCursor();                  
        return $adCompany;
    }

    public function getDBPeoples(){
        $req = "SELECT * from peoples";
        $stmt = $this->getBdd()->prepare($req); 
        $stmt->execute();                      
        $peoples = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();                   
        return $peoples;
    }

    
    public function insertDBPeople($firstName, $lastName, $email, $password, $role){
        $req = "INSERT INTO peoples (first_name, last_name, email, password, role) VALUES (:first_name, :last_name, :email, :password, :role)";
        $stmt = $this->getBdd()->prepare($req); 

        $stmt->bindParam(':first_name', $firstName);
        $stmt->bindParam(':last_name', $lastName);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':role', $role);
        $stmt->execute();
        return 1;
    }
}