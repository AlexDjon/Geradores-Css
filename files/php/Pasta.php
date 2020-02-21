<?php

class Pasta {
   public function pegarArquivos($pasta, $extensao) {
      $views = glob($pasta.'{*.'.$extensao.'}', GLOB_BRACE);
      for($i = 0; $i < count($views); $i++) { 
         $views[$i] = explode('.'.$extensao, explode('/', $views[$i])[1])[0];
      }

      return $views;
   }

   public function procurar($valor, $arquivos) {
      for ($i = 0; $i < count($arquivos)-1; $i++) {
         if($valor === $arquivos[$i]) {
            return $valor;
         }
      }
      return false;
   }

   public function infos() {
      $json = file_get_contents('pages/src/infos.json');
      $decode = json_decode($json, true);
      
      return $decode;
   }
}

?>