<?php 
class DataBase{
    private $host = "162.243.168.59";
    private $db_name = "proyecto_2_c00490_c04408";
    private $username = "edwin";
    private $password = "Abcd123$";
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