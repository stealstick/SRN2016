<?php 
if (strpos($_SERVER['HTTP_USER_AGENT'],'Android') !== false) {
  echo "<meta http-equiv='refresh' content='0;url=m_index.html'>";
}
else{
	echo "<meta http-equiv='refresh' content='0;url=pc_index.html'>";
}
  ?>