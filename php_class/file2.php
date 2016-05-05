<?php
    include ("file1.php");
    class MusicPerformers
    {
        function __construct()
        {
        }
    
        function call_a_singer()
        { 
            $person = new Singer();
            $name = $person->getName();
            echo $name;    //Prints John
        }
    }
    // question? Of all music performers, name a singer you know. 
    $instant_question = new MusicPerformers();
    // see answer displays below through calling out a name of a singer.
    $instant_question->call_a_singer();
    
    $myInstance = new MyClass();
    $myInstance->lambda->__invoke();
    
    $loo = $myInstance->lambda;
    $loo();
    $too = $myInstance->beta;
    $too('ph');
?>
