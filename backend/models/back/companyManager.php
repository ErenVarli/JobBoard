<?php
require_once "models/db.php";

class CompanyManager extends db{
    
    public function deleteDBcompany($company_id){
        try {
            $req = "Delete from companies where company_id = :company_id";
            $stmt = $this->getBdd()->prepare($req);
            $stmt->bindParam(':company_id', $company_id, PDO::PARAM_INT);
            $stmt->execute();
            $stmt->closeCursor();
        }catch (PDOException $e) {
            echo "ERROR";
        }
    }
    public function modifyBDcompany($company_id,$name,$email,$password){
        $req ="Update companies set name = :name, email = :email, password = :password
        where company_id = :company_id";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":company_id",$company_id,PDO::PARAM_INT);
        $stmt->bindValue(":name",$name,PDO::PARAM_STR);
        $stmt->bindValue(":email",$email,PDO::PARAM_STR);
        $stmt->bindValue(":password",$password,PDO::PARAM_STR);
        $stmt->execute();
        $stmt->closeCursor();

    }
}