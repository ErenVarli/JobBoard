<?php
require_once "models/back/companyManager.php";


class CompanyController{
    private $companyManager;

    public function __construct()
    {
        $this->companyManager = new companyManager;
    }

    public function delete(){
        $this->companyManager->deleteDBcompany((int)$_POST['company_id']);
    }
    public function modify(){
        $company_id = (int)$_POST['company_id'];
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $this->companyManager->modifyBDcompany($company_id,$name,$email,$password);
        header('Location: http://localhost:5173/companies');
    }

}