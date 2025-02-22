<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once "models/db.php";

class PeopleManager extends db
{

    private function getPeopleRole($email)
    {
        $req = "SELECT * FROM peoples WHERE email = :email";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":email", $email, PDO::PARAM_STR);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $user["role"];
    }

    public function getPeopleID($email)
    {
        $req = "SELECT * FROM peoples WHERE email = :email";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":email", $email, PDO::PARAM_STR);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $user["people_id"];
    }

    private function getPeoplePassword($email)
    {
        $req = "SELECT * FROM peoples WHERE email = :email";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":email", $email, PDO::PARAM_STR);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $user["password"];
    }


    public function getDBPeopleById($people_id)
    {
        $req = "SELECT * FROM peoples WHERE people_id = :people_id";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":people_id", $people_id, PDO::PARAM_INT);
        $stmt->execute();
        $people = $stmt->fetch(mode: PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $people;
    }

    public function updatePeopleByID($people_id, $last_name, $first_name, $email, $password)
    {
        $req = "UPDATE peoples SET last_name = :last_name, first_name = :first_name, email = :email, password = :password WHERE people_id = :people_id";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":people_id", $people_id, PDO::PARAM_INT);
        $stmt->bindValue(":last_name", $last_name, PDO::PARAM_STR);
        $stmt->bindValue(":first_name", $first_name, PDO::PARAM_STR);
        $stmt->bindValue(":email", $email, PDO::PARAM_STR);
        $stmt->bindValue(":password", $password, PDO::PARAM_STR);
        $stmt->execute();
        $stmt->closeCursor();
    }


    public function applyApplication($ad_id, $people_id, $comment)
    {
        $req = "INSERT INTO applications (ad_id, people_id, comment, date_application) VALUES (:ad_id, :people_id, :comment, NOW())";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":ad_id", $ad_id, PDO::PARAM_INT);
        $stmt->bindValue(":people_id", $people_id, PDO::PARAM_INT);
        $stmt->bindValue(":comment", $comment, PDO::PARAM_STR);
        $stmt->execute();
        $stmt->closeCursor();
        return true;
    }


    public function isConnexionValid($email, $password)
    {
        $passworBD = $this->getPeoplePassword($email);
        if ($password == $passworBD) {
            return true;
        }
    }
    public function sessionRole($email)
    {
        $role = $this->getPeopleRole($email);
        return $role;
    }

    public function insertDBPeople($firstName, $lastName, $email, $password, $role)
    {
        $req = "INSERT INTO peoples (first_name, last_name, email, password, role) VALUES (:first_name, :last_name, :email, :password, :role)";
        $stmt = $this->getBdd()->prepare($req);

        $stmt->bindParam(':first_name', $firstName);
        $stmt->bindParam(':last_name', $lastName);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':role', $role);
        $stmt->execute();
    }

    public function deleteDBpeople($people_id)
    {
        try {
            $req = "Delete from peoples where people_id = :people_id";
            $stmt = $this->getBdd()->prepare($req);
            $stmt->bindParam(':people_id', $people_id, PDO::PARAM_INT);
            $stmt->execute();
            $stmt->closeCursor();
        } catch (PDOException $e) {
            echo "ERROR";
        }
    }
    
    public function modifyBDpeople($people_id, $last_name, $first_name, $email, $password)
    {
        $req = "UPDATE peoples SET last_name = :last_name, first_name = :first_name, email = :email, password = :password WHERE people_id = :people_id";
        $stmt = $this->getBdd()->prepare($req);
        $stmt->bindValue(":people_id", $people_id, PDO::PARAM_INT);
        $stmt->bindValue(":last_name", $last_name, PDO::PARAM_STR);
        $stmt->bindValue(":first_name", $first_name, PDO::PARAM_STR);
        $stmt->bindValue(":email", $email, PDO::PARAM_STR);
        $stmt->bindValue(":password", $password, PDO::PARAM_STR);
        $stmt->execute();
        $stmt->closeCursor();
    }
}
?>