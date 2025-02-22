<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once "models/db.php";

class Securite
{
    public static function secureHTML($string)
    {
        return htmlentities($string);
    }
}

?>