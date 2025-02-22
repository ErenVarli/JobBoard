<?php
require_once "models/db.php";

class AdManager extends db{
    public function deleteDBad($ad_id){
        try {
            $req = "Delete from advertisements where ad_id = :ad_id";
            $stmt = $this->getBdd()->prepare($req);
            $stmt->bindParam(':ad_id', $ad_id, PDO::PARAM_INT);
            $stmt->execute();
            $stmt->closeCursor();
        }catch (PDOException $e) {
            echo "ERROR";
        }
    }
    public function modifyBDad($ad_id,$title,$description, $type_contract){
        $req ="Update advertisements set title = :title, description = :description, type_contract = :type_contract 
        where ad_id= :ad_id";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":ad_id",$ad_id,PDO::PARAM_INT);
        $stmt->bindValue(":title",$title,PDO::PARAM_STR);
        $stmt->bindValue(":description",$description,PDO::PARAM_STR);
        $stmt->bindValue(":type_contract",$type_contract,PDO::PARAM_STR);
        $stmt->execute();
        $stmt->closeCursor();
    }
}