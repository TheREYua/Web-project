<?php
$connection = mysqli_connect('localhost', 'root', '', 'WEB_project');
if($connection == false)
{
  echo'Error with connection to database!';
  echo mysqli_connect_error();
  exit();
 }

if(isset($_POST['submit']))
{
    $name = mysqli_real_escape_string($connection, trim($_POST[name]));
    $secondName = mysqli_real_escape_string($connection, trim($_POST[secondName]));
    $surname = mysqli_real_escape_string($connection, trim($_POST[surname]));
    $DD = mysqli_real_escape_string($connection, trim($_POST[DD]));
    $MM = mysqli_real_escape_string($connection, trim($_POST[MM]));
    $YY = mysqli_real_escape_string($connection, trim($_POST[YY]));
    $sex = mysqli_real_escape_string($connection, trim($_POST[sex]));
    $sociallink = mysqli_real_escape_string($connection, trim($_POST[socialLink]));
    $nickname = mysqli_real_escape_string($connection, trim($_POST[nickname]));
    $password = mysqli_real_escape_string($connection, trim($_POST[password]));
    
    
    $query = "SELECT * FROM `person` WHERE nickname = '$nickname'";
    $data = mysql_query($connection, $query);
    if(mysql_num_rows($data)==0)
    {
        $query = "INSERT INTO `person` (username, user_second_name, user_surname, date_day, date_month, date_year, sex, link, nickname, password) 
        VALUES ('$name', '$secondName', '$surname', '$DD', '$MM', '$YY', '$sex', '$sociallink', '$nickname', '$password') ";
        mysqli_query($connection, $query);
        echo 'Everithing is OK, you may log in';
        mysqli_close($connection);
        exit();
    }

}

?>