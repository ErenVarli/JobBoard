<?php
session_start();


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


require "security.class.php";
require "models/back/people.manager.php";
require_once "models/db.php";



class PeopleController
{
    private $peopleManager;

    public function __construct()
    {
        $this->peopleManager = new PeopleManager;
    }

    public function logPeople()
    {
        if (!empty($_POST['email']) && !empty($_POST['password'])) {

            $email = Securite::secureHTML($_POST['email']);
            $password = Securite::secureHTML($_POST['password']);

            if ($this->peopleManager->isConnexionValid($email, $password)) {
                $state = True;

                if (($this->peopleManager->sessionRole($email) == "admin")) {
                    $_SESSION['role'] = "admin";
                } else if (($this->peopleManager->sessionRole($email) == "user")) {
                    $_SESSION['role'] = "user";
                } else if ($this->peopleManager->sessionRole($email) == "company") {
                    $_SESSION['role'] = "company";
                }

                $_SESSION['people_id'] = $this->peopleManager->getPeopleID($email);

            } else {
                $state = False;
            }
        }

        $res = array('state' => $state, 'role' => $_SESSION['role'], 'people_id' => $_SESSION['people_id']);
        echo json_encode($res);
    }

    public function getPeople()
    {
        $_SESSION['people_id'] = 45;
        $people = $this->peopleManager->getDBPeopleById($_SESSION['people_id']);
        db::sendJSON($people);
    }

    public function updatePeople()
    {
        $_SESSION['people_id'] = 45;

        if (!empty($_POST['first_name']) && !empty($_POST['last_name']) && !empty($_POST['email']) && !empty($_POST['password'])) {
            $first_name = Securite::secureHTML($_POST['first_name']);
            $last_name = Securite::secureHTML($_POST['last_name']);
            $email = Securite::secureHTML($_POST['email']);
            $password = Securite::secureHTML($_POST['password']);

            $this->peopleManager->updatePeopleByID($_SESSION['people_id'], $last_name, $first_name, $email, $password);
            $state = True;
            $res = array('state' => $state);
            echo json_encode($res);

        } else {
            $state = False;
        }
    }

    public function applyNow()
    {
        $_SESSION['people_id'] = 45;
        $ad_id = 3;

        $comment = Securite::secureHTML($_POST['comment']);
        //$ad_id = Securite::secureHTML($_POST['ad_id']);
        $people_id = Securite::secureHTML($_POST['people_id']);
        $this->peopleManager->applyApplication($ad_id, $_SESSION['people_id'] = 45, $comment);
        $state = True;
        $res = array('state' => $state);
        echo json_encode($res);
    }

    public function insertPeople()
    {
        if (!empty($_POST['firstName']) && !empty($_POST['lastName']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['confirmPassword']) && !empty($_POST['role'])) {
            $firstName = Securite::secureHTML($_POST['firstName']);
            $lastName = Securite::secureHTML($_POST['lastName']);
            $email = Securite::secureHTML($_POST['email']);
            $password = Securite::secureHTML($_POST['password']);
            $confirmPassword = Securite::secureHTML($_POST['confirmPassword']);
            $role = Securite::secureHTML($_POST['role']);

            if ($password == $confirmPassword) {
                $this->peopleManager->insertDBPeople($firstName, $lastName, $email, $password, $role);
                $state = True;
            } else {
                $msg = "Passwords are different.";
                $state = False;
            }
            $res = array('msg' => $msg, 'state' => $state);
            echo json_encode($res);
        }
    }


    public function delete()
    {
        $this->peopleManager->deleteDBpeople((int) $_POST['people_id']);
    }
    public function modify()
    {
        $people_id = (int) $_POST['people_id'];
        $name = $_POST['last_name'];
        $first_name = $_POST['first_name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        echo $people_id;
        $this->peopleManager->modifyBDpeople($people_id, $name, $first_name, $email, $password);
        header('Location: http://localhost:5173/users');
    }

}

?>