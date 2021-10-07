<?php
    // Ubah format tanggal di atas menjadi 05-20-01 menggunakan substring
    $tagg = "2020-05-01";
    $formattag = substr($tagg,5,3).substr($tagg,2,3).substr($tagg,8,2);
    echo "$formattag <br><br>";
    ?>
