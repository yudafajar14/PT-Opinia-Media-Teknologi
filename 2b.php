<?php
// Ubah format tanggal di atas menjadi 05-20-01 menggunakan format date php
    $dates=date_create("2020-05-01");
    echo date_format($dates,"m-y-d");
?>
