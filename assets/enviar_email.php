<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    
 
    empty($name) && empty($email) ? exit('Preencha seu nome e email') : null;
    empty($name) ? exit('Preencha seu nome.') : null;
    empty($email) ? exit('Preencha seu email') : null;
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $domain = substr(strrchr($email, "@"), 1);
        if (checkdnsrr($domain, "MX")) {

            $to = 'atendimento@marciushipnosems.com.br';
            $subject = utf8_decode('Email recebido da Landing Page');
            $message  = utf8_decode("Nome: $name \r\n\r\n Telefone: $phone \r\n\r\n Email: $email");
            $headers = "From: $email\r\nReply-to: $email\r\nContent-Type: text/plain; charset=UTF-8";           

            if (mail($to, $subject, $message, $headers)) {
                echo 'Enviado com sucesso. Em breve entraremos em contato!';
                exit();
                } else {
                    echo 'Erro ao enviar formulário';
                    exit();
            }
        } 
    } else {
        echo "O e-mail não é válido.";
        exit();
    }

} else {
    echo 'Campos não preenchidos corretamente!';
    exit();
}

?>