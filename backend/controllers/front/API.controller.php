<?php

require_once "models/front/API.manager.php";
require_once "models/db.php";
require_once "models/db.php";

class APIController {
    private $apiManager;

    public function __construct()
    {
        $this->apiManager = new APIManager(); //instanciation apimanager à chaque construction lié au requete et à l'api rest
    }

    public function getAd(){
        $ad = $this->apiManager->getDBAdvertisements();
        db::sendJSON($ad);
    }
    public function getCompany(){
        $company = $this->apiManager->getDBCompany();
        db::sendJSON($company);
    }
    public function getPeople(){
        $people = $this->apiManager->getDBPeople();
        db::sendJSON($people);
    }
    public function getAdCompany(){
        $adCompany = $this->apiManager->getDBAdCompany($_POST['company_id']);
        db::sendJSON($adCompany);
    }
}