<?php
// permet de remplacer index.php par https ou http puis la page demandé
//exemple: http://localhost/..

define("URL", str_replace("index.php", "", (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));

require_once "controllers/front/API.controller.php";
require_once "controllers/back/ad.controller.php";
require_once "controllers/back/company.controller.php";
require_once "controllers/back/people.controller.php";

$apiController = new APIController();
$adController = new AdController();
$companyController = new CompanyController();
$peopleController = new PeopleController();

try {
    if (empty($_GET['page'])) {
        echo "Page does not exist";
    } else {
        //explode genere un tableau
        $url = explode("/", filter_var($_GET['page'], FILTER_SANITIZE_URL)); // ajout d'un filtre pour sécuriser ce qui passe par la methode get
        //if(empty($url[0] || empty($url[1]))) throw new Exception("Page does not exist");
        if (!isset($url[0]) || !isset($url[1])) {
            throw new Exception("Page does not exist");
        }
        // on regarde si on est dans le front ou le back
        switch ($url[0]) {
            case "frontend":
                switch ($url[1]) {
                    case "posts":
                        $apiController->getAd();
                        break;
                    case "companies":
                        $apiController->getCompany();
                        break;
                    case "peoples":
                        $apiController->getPeople();
                        break;
                    case "adcompany":
                        $apiController->getAdCompany();
                        break;
                    case "insert-people":
                        $peopleController->insertPeople();
                        break;

                    case "log-people":
                        $peopleController->logPeople();
                        break;

                    case "data-people":
                        $peopleController->getPeople();
                        break;

                    case "update-people":
                        $peopleController->updatePeople();
                        break;

                    case "apply":
                        $peopleController->applyNow();

                    default:
                        throw new Exception("Page does not exist");
                }
                break;
            case "backend":
                switch ($url[1]) {
                    case "ad":
                        switch ($url[2]) {
                            case "validationSupression":
                                $adController->delete();
                                header('Location: http://localhost:5173/postsadmin');
                                break;
                            case "modification":
                                $adController->modify();
                                break;
                            default:
                                throw new Exception("Page does not exist");
                        }
                    case "companies":
                        switch ($url[2]) {
                            case "validationSuppression":
                                $companyController->delete();
                                header('Location: http://localhost:5173/companies');
                                break;
                            case "modification":
                                $companyController->modify();
                                break;
                        }
                    case "peoples":
                        switch ($url[2]) {
                            case "validationSuppression":
                                $peopleController->delete();
                                header('Location: http://localhost:5173/users');
                                break;
                            case "modification":
                                $peopleController->modify();
                                break;
                        }
                }
                break;
            default:
                throw new Exception("Page does not exist");
        }
    }
} catch (Exception $e) {
    echo "ERROR";
}