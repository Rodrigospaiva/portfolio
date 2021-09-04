<!-- <?php

if (isset($_POST['email']) && !empty($_POST['email'])) {

$nome = addlasheds($_POST['name']);
$email = addlasheds($_POST['email']);
$mensagem = addlasheds($_POST['mensagem']);

$para = "engenha.rsp@gmail.com";
$assunto = "Contato - CodeRSP";
$header = "From: email@codersp.com".
            ."X=Mailer:PHP/".phpversion(); 

$corpo =    "Nome:      "        .$_POST['nome'].  "\n"
            "E-mail:    "      .$_POST['email'].  "\n"
            "Telefone:  "    .$_POST['telefone'].  "\n"
            "Assunto:   "     .$_POST['assunto'].  "\n"
            "Mensagem:  "    .$_POST['mensagem'].;

$enviado = 'Obrigado pela mensagem, em breve retornarei o contato.'
$naoEnviado = 'A mensagem não pôde ser enviada, envie um Email para contato@codersp.com'

if ( mail($corpo)) {
            echo $enviado;
        }else{
            echo $naoEnviado;
    }

}

?> -->