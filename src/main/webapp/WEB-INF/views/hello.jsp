<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>LoL</title>
    <meta charset="UTF-8">
</head>
<body>
    <h1>LOL</h1>
    <div id="container">
        <form id="info">
            <label for="nickname">
                소환사 닉네임
            </label>
                <input type="text" id="nickname">
            <input type="button" onclick="search_nick();" >
        </form>
        <div id="result"></div>
    </div>
    <button onclick="onlyone()">누르면 안보일려나</button>
    <button onclick="plus()">누르면 추가할려나</button>

    <script src="/res/js/hello.js"></script>
</body>
</html>


