<?php
   // Navegação pela pasta
   require_once('files/php/Pasta.php');
   $pasta = new Pasta;

   // Informacoes dos projetos
   $infos = $pasta->infos();

   // Procurar arquivo ou retonar página inicial
   $pagina = isset($_GET['pagina']) ? trim($_GET['pagina']) : 'undefined';
   $arquivos = $pasta->pegarArquivos('pages/','html');
   $gerador = $pasta->procurar($pagina,$arquivos) ? $pagina : 'listagem';
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title><?= $infos[$gerador]['titulo'] ?></title>

   <!-- Meta tags -->
   <meta name="author" content="Alex Djonata">
   <meta name="copyright" content="© 2020 Alex Djonata">
   <meta name="robots" content="index, follow">
   <meta name="theme-color" content="#222222">   
   <meta name="description" content="<?= $infos[$gerador]['description'] ?>">
   <meta name="keywords" content="<?= $infos[$gerador]['keywords'] ?>">

   <!-- Links -->
   <link rel="stylesheet" href="files/css/default.css">
   <link rel="stylesheet" href="files/css/base.css">
   <link rel="shortcut icon" href="files/img/favicon.png">
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" integrity="sha384-v8BU367qNbs/aIZIxuivaU55N5GPF89WBerHoGA4QTcbUjYiLQtKdrfXnqAcXyTv" crossorigin="anonymous">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
   <script src="files/js/jquery.mask.js"></script>
   <script src="files/js/script.js"></script>

   <!-- Projeto links -->
   <link rel="stylesheet" href="files/projetos/<?= $gerador ?>/style.css">
   <script src="files/projetos/<?= $gerador ?>/script.js"></script>
</head>
<body <?php if($gerador == 'listagem') { echo 'onload="temas(0,\'blue\');"'; } ?>>   
   <main class='generator'>
      <header>
         <select class='theme-select'>
            <option value='white' selected>White Theme</option>
            <option value='black'>Dark Theme</option>
            <option value='blue'>Blue Theme</option>
            <option value='green'>Green Theme</option>
            <option value='red'>Red Theme</option>
            <option value='orange'>Orange Theme</option>
            <option value='purple'>Purple Theme</option>
            <option value='yellow'>Yellow Theme</option>
         </select>
         <h3 class='title'> <?= $infos[$gerador]['titulo'] ?> </h3>
         <div class='icons'>
            <a href="https://github.com/AlexDjon" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://twitter.com/AlexDjonata" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/alex.djonata.52" target="_blank"><i class="fab fa-facebook-f"></i></a>
         </div>
      </header>
      <section class='container'>
         <?php require_once('pages/'.$gerador.'.html') ?>
      </section>
   </main>
</body>
</html>