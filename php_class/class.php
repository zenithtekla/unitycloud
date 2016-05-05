<?php
class ClassA
{
  public function method1() {
    echo ClassB::method2();
  }
}

class ClassB
{
  public static function method2() {
    return 'WOOT!';
  }
}

$cls_a = new ClassA();
$cls_a->method1();

// or alternatively, you don't even need to instantiate ClassA
echo ClassB::method2();


function foo()
{
    $numargs = func_num_args();
    echo "Number of arguments: $numargs \n";
    if ($numargs >= 2) {
        echo "Second argument is: " . func_get_arg(1) . "\n";
    }
    $arg_list = func_get_args();
    for ($i = 0; $i < $numargs; $i++) {
        echo "Argument $i is: " . $arg_list[$i] . "\n";
    }
}

foo(98, 74, 81);

$func = function() {
    $args = func_get_args();
    $res = 1;
    foreach($args as $arg)
		{
		  if (is_numeric($arg))
			  $res *= $arg;
		}

		return $res;
};

var_dump(call_user_func_array($func, array(2, 4, 3, "5")));

// first class function
$add = function($first, $second, $callback) {
  echo "\n\n". $first+$second . "\n\n";
  if ($callback) $callback();
};

function logDone(){
  echo "\n\n done \n\n";
}
call_user_func_array($add, array(2, 3, logDone));
call_user_func_array($add, array(3, 6, function(){
  echo "\n\n done executing an anonymous function!";
}));