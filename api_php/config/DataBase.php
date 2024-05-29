<?php 
class DataBase{
    private $host = "sql5.freesqldatabase.com";
    private $db_name = "sql5710117";
    private $username = "sql5710117";
    private $password = "69GcGQclDP";
    public $conn;
    public function dbConnection(){
        $this->conn = null;
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
?>