<?php
    // written with attempted inclusion of some logic, data binding, lambda & closure in PHP

    function input_string_valid ($str){
        return isset($str) && !empty($str);
    }
    function input_string_escape ($inp){ 
        if(is_array($inp))  return array_map(__METHOD__, $inp);
    
        if(input_string_valid($inp)) { 
            return str_replace(
                array('\\', "\0", "\n", "\r", "'", '"', "\x1a"),
                array('\\\\', '\\0', '\\n', '\\r', "\\'", '\\"', '\\Z'), 
                $inp
            );
        }
        return $inp; 
    }
    function debug_data_flow ($boo, $args){
        if ($boo)
        foreach ($args as $v) {
            if (isset($v)){
                print_r($v);
                echo "<br/><hr><br/><br/>";
            }
        }
    }

    function recursive($haystack){
        foreach($haystack as $key => $value){
            //If $value is an array.
            if(is_array($value)){
                //We need to loop through it.
                recursive($value);
            } else{
                //It is not an array, so print it out.
                echo $key . ": " . $value, '<br>';
            }
        }
    }
    
    // working
    $db_entry_check = function($needle, $haystack){
        $t_exist = 'false';
        $t_count = 0;
        
        function h_loop (&$t_count, $value, $array){
            foreach ($array as $key => $val){
                if (is_array($val)){
                    h_loop($t_count, $value, $val);
                } else {
                    echo "<br/> --- value: ". $value. "<br/> --- val: ". $val . "<br/><br/>";
                    if ($val === $value){
                        $t_count += 1;
                        echo "<br/>" . $t_count . "<br/>";
                        continue;
                    }
                }
            }
        }
        
        function n_loop (&$t_count, $arr, $array){
            foreach ($arr as $key => $value){
                if (is_array($value)){
                    n_loop($t_count, $value, $array);
                } else {
                    if ($t_count > 2) continue;
                    call_user_func_array('h_loop', [&$t_count, $value, $array]);
                }
            }
        }
        n_loop($t_count, $needle, $haystack);
        echo "<br/>" . $t_count . "<br/>";
        if ($t_count > 2) $t_exist = 'true';
        return $t_exist;
    };
    
    $factorial = function($n) use (&$factorial) {
          if ($n <= 1)
            return 1;
          else
            return $n * $factorial($n - 1);
    };
    echo $factorial(5); //Output : 120

    $db_entry_exist = function($needle, $haystack){
        $t_exist = 'false';
        $t_count = 0;
        // n_loop($t_count, $needle, $haystack);
        
        $h_loop = function (&$t_count, $value, $array) use (&$h_loop) {
            foreach ($array as $key => $val){
                if (is_array($val)){
                    h_loop($t_count, $value, $val);
                } else {
                    echo "<br/> --- value: ". $value. "<br/> --- val: ". $val . "<br/><br/>";
                    if ($val === $value){
                        $t_count += 1;
                        echo "<br/>" . $t_count . "<br/>";
                        continue;
                    }
                }
            }
        };
        
        $factoral = function($n) use (&$factoral) {
          if ($n <= 1)
            return 1;
          else
            return $n * $factoral($n - 1);
        };
        
        $n_loop = function (&$t_count, $arr, $array) use (&$n_loop) {
            foreach ($arr as $key => $value){
                if (is_array($value)){
                    $n_loop($t_count, $value, $array);
                } else {
                    if ($t_count > 2) continue;
                    $h_loop($t_count, $value, $array);
                }
            }
        };
        
        /*$n_loop = function ($arr, $array) use (&$n_loop, &$t_count){
            // echo "<br/> --- nloop.t_count: " . $t_count . "<br/>";
            foreach ($arr as $key => $value){
                if (is_array($value)){
                    $n_loop($value);
                } else {
                    if ($t_count > 2) continue;
                    // $h_loop($value, $array);
                }
            }
        };*/
        
        $n_loop($t_count, $needle, $haystack);
        echo "<br/>" . $t_count . "<br/>";
        if ($t_count > 2) $t_exist = 'true';
        return $t_exist;
    };
    
    function db_entry_add (&$out, $args){
        $t_exist = false;
        $t_count = 0;
        foreach ($args as $v) {
            // verify
            if (is_array($v))
            foreach ($v as $val) {
                foreach ($out as $va) {
                    foreach ($va as $value) {
                        if ($val ===$value){
                            // echo "<br/> Value: ". $value. "<br/> val: ". $val;
                            $t_count++;
                            if ($t_count > 2) {
                                $t_exist = true;
                                continue;
                            }
                        }
                    }
                }
            }
            if ($t_exist) continue;
            $out[count($out)] = $v;
        }
        return $out;
    }
    
    // Config
    $t_json_file_path = "data.json";
    $t_debug_mode = true;
    
    $_POST["customer"] = "lov_01";
    $_POST["assembly"] = "lov_02";
    $_POST["date_received"] = "lov_03";
    $_POST["time_received"] = "lov_04";
    $_POST["date_completed"] = "lov05";
    $_POST["time_completed"] = "lov_06";
    $t_new_entry = [ 
        "customer"      => "lov_01", 
        "assembly"      => "lov_02",
        "date_received" => "lov_03",
        "time_received" => "lov_04",
        "time_completed"=> "lov_05",
        "time_completed"=> "lov_06"
    ];
    $t_string_array = [   
        "customer", 
        "assembly", 
        "date_received", 
        "time_received", 
        "date_completed",
        "time_completed"
    ];
    
    try {
        foreach ($t_string_array as $v) {
            if ( input_string_valid( (string)$_POST[$v] ) )
                $t_new_entry[$v] = input_string_escape($_POST[$v]);
        }
        
        $t_json_string = file_get_contents($t_json_file_path);
        $t_json_arr = json_decode($t_json_string, true);
        
        // recursive($t_json_arr);
        // exist
        // $t_boo = $db_entry_check($t_new_entry, $t_json_arr);
        $t_bool = $db_entry_exist($t_new_entry, $t_json_arr);
        
        // adding new_entry
        db_entry_add($t_json_arr, [$t_new_entry]);
        
        
        //Convert updated array to JSON
        $t_json_data = json_encode($t_json_arr, JSON_PRETTY_PRINT);
        
        debug_data_flow($t_debug_mode, [
            $t_new_entry,
            $t_json_arr,
            $t_json_data,
            $t_bool,
            $t_boo
        ]);
        
        //write json data into data.json file
	   if(file_put_contents($t_json_file_path, $t_json_data)) {
	        echo 'Data successfully saved';
	    }
	   else 
	        echo "error";

    } catch (Exception $e ) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }
    
    
    