<?php
require_once "models/back/ad.manager.php";


class AdController{
    private $adManager;

    public function __construct()
    {
        $this->adManager = new AdManager;
    }

    public function delete(){
        $this->adManager->deleteDBad((int)$_POST['ad_id']);
    }
    public function modify(){
        $ad_id = (int)$_POST['ad_id'];
        $title = $_POST['title'];
        $description = $_POST['description'];
        $type_contract = $_POST['contract'];
        $this->adManager->modifyBDad($ad_id,$title,$description, $type_contract);
        header('Location: http://localhost:5173/postsadmin');
    }

}