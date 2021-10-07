<?php
// Berapa umur anda jika dihitung dari tanggal 2020-05-01
	$tgl_lahir = new DateTime("1996-04-14");
	$tanggal = new DateTime("2020-05-01");
	if ($tgl_lahir > $tanggal) { 
	    exit("0 tahun 0 bulan 0 hari");
	}
	$umur = $tanggal ->diff($tgl_lahir)->y;
	echo  $umur. " tahun";
?>
