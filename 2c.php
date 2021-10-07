<?php
// Tampilkan 6 bulan kedepan dari tanggal 2020-05-01
    $dates=date_create("2020-05-01");
    date_add($dates,date_interval_create_from_date_string("3 month"));
    echo date_format($dates,"Y-m-d");
?>
