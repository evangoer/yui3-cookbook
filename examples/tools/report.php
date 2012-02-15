<?php
function escapeHTML($str) {
    return htmlentities($str, ENT_QUOTES | ENT_HTML5 | ENT_SUBSTITUTE, 'UTF-8');
}

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    file_put_contents('/tmp/test_results.xml', $_POST['results']);
}
else {
    $results = simplexml_load_file('/tmp/test_results.xml');
    $tests = $results->xpath('//test');
?>

<!DOCTYPE html>
<title>Test Report for <?php echo escapeHTML($results['name']); ?></title>
<style>
    td { border: 1px #000 solid; padding: 2px } 
    td.fail { background: #f33; } 
</style>
<h1>
    Test Report for <?php echo escapeHTML($results['name']); ?>:
    <?php echo escapeHTML($results['total']); ?> total,
    <?php echo escapeHTML($results['failed']); ?> failed
</h1>
<table>
<tr>
    <th>Test</th>
    <th>Result</th>
    <th>Message</th>
</tr>
<?php 
    foreach ($tests as $test) {
        $class = $test['result'] == 'fail' ? 'class="fail"' : ''; 
?>
<tr> 
    <td><?php echo escapeHTML($test['name']); ?></td>
    <td <?php echo $class; ?>><?php echo escapeHTML($test['result']); ?></td>
    <td><?php echo escapeHTML($test['message']); ?></td>
</tr>  
<?php } ?>
</table>
<?php } ?>