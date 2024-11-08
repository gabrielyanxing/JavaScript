<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index of <?php echo htmlspecialchars($_SERVER['REQUEST_URI']); ?></title>
    <style>
        /* 基础样式 */
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #F8F9FA;
            color: #333;
        }

        /* 标题样式 */
        h1 {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #333;
        }

        /* 表格样式 */
        table {
            width: 100%;
            border-collapse: collapse;
        }

        th, td {
            padding: 16px;
            text-align: left;
            font-size: 16px;
        }

        th {
            color: #555;
            font-weight: 600;
            text-transform: uppercase;
            padding-bottom: 12px;
            border-bottom: 2px solid #E5E7EB;
        }

        td {
            border-bottom: 1px solid #E5E7EB;
        }

        tr:last-child td {
            border-bottom: none;
        }

        /* 链接样式 */
        a {
            color: #333;
            text-decoration: none;
            font-weight: 500;
            display: flex;
            align-items: center;
            transition: color 0.3s ease;
        }

        a:hover {
            color: #2B6CB0;
        }

        /* 图标样式 */
        .icon {
            margin-right: 8px;
            font-size: 18px;
        }

        /* 按钮样式 */
        .btn {
            display: inline-block;
            padding: 10px 16px;
            color: #333;
            border: 2px solid #333;
            border-radius: 6px;
            font-size: 16px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .btn:hover {
            background-color: #333;
            color: #FFF;
        }

        /* 扁平化效果 */
        .highlight {
            color: #333;
            background-color: #ef682b;
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: bold;
        }

        /* 响应式优化 */
        @media (max-width: 600px) {
            th, td {
                font-size: 14px;
                padding: 10px;
            }
            h1 {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>

<!-- 导航栏 -->
<header style="background-color: #2c2c2c; padding: 10px 20px; border-radius: 15px;">
    <nav style="display: flex; align-items: center; justify-content: space-between;">
        <!-- 左侧的 Logo -->
        <a href="https://users.metropolia.fi/~xingy/" style="display: flex; align-items: center; text-decoration: none;">
            <img src="https://upload.wikimedia.org/wikipedia/fi/thumb/6/61/Metropolia_Ammattikorkeakoulu_logo.svg/1200px-Metropolia_Ammattikorkeakoulu_logo.svg.png" alt="Logo" style="height: 55px;">
        </a>
        <!-- 右侧的文字 -->
        <span style="color: #FFF; font-size: 24px; font-weight: bold;">Xing Yan</span>
    </nav>
</header>

<?php
// 获取当前请求的路径，用于显示“Index of”标题
$currentPath = htmlspecialchars($_SERVER['REQUEST_URI']);
echo "<h1 style='font-size: 23px; padding-left: 12px;'>Index of $currentPath</h1>";

// 检查是否存在文件名参数
if (isset($_GET['file']) && file_exists($_GET['file'])) {
    $file = $_GET['file'];

    // 如果是 HTML 文件，则直接跳转以正常显示
    if (pathinfo($file, PATHINFO_EXTENSION) === 'html') {
        header("Location: $file");
        exit;
    }

    // 显示非 HTML 文件内容
    echo "<h1>Index of $currentPath/$file</h1>";
    echo "<pre style='background-color: #FFF; padding: 20px; border-radius: 8px; border: 1px solid #E5E7EB;'>"
        . htmlspecialchars(file_get_contents($file))
        . "</pre>";
} else {
    // 显示文件夹索引
    echo '<table>
        <tr>
            <th>Name</th>
            <th>Last modified</th>
            <th>Size</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>
                <a href="https://users.metropolia.fi/">
                    <img src="https://cdn-icons-png.flaticon.com/128/3767/3767084.png" alt="Folder Icon" style="width: 18px; height: 18px; margin-right: 8px;">
                    <span class="highlight">Parent Directory</span>
                </a>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>';

    // 扫描当前目录中的文件和文件夹
    $files = scandir('.');
    foreach($files as $file) {
        if ($file == '.' || $file == '..') continue; // 跳过当前目录和父目录
        $modTime = date("Y-m-d H:i", filemtime($file)); // 获取最后修改时间
        $size = is_dir($file) ? '-' : filesize($file) . ' bytes'; // 显示文件大小
        $icon = is_dir($file) ? '<img src="https://cdn-icons-png.flaticon.com/128/3767/3767094.png" alt="Folder Icon" style="width: 18px; height: 18px; margin-right: 8px;">' : '<img src="https://cdn-icons-png.flaticon.com/512/15557/15557979.png" alt="Folder Icon" style="width: 18px; height: 18px; margin-right: 8px;">'; // 选择文件夹或文件图标
        $link = is_dir($file) ? rtrim($currentPath, '/') . "/$file/" : "?file=" . urlencode($file); // 如果是文件夹，直接链接到文件夹路径

        echo "<tr>";
        echo "<td><a href=\"$link\"><span class=\"icon\">$icon</span>$file</a></td>";
        echo "<td>$modTime</td>";
        echo "<td>$size</td>";
        echo "<td>&nbsp;</td>";
        echo "</tr>";
    }
    echo '</table>';
}
?>

</body>
</html>