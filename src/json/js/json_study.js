let userData = {
    "code": 1,
    "msg": "유저정보 로드 성공",
    "data": {
        "usercode": 202206021,
        "username": "junil",
        "password": "1234",
        "name": "김준일",
        "email": "skjil1218@kakao.com",
        "role": ["ROLE_ADMIN", "ROLE_USER"],
        "provider": "naver"
        }
}

let jsonData = JSON.stringify(userData);

console.log(jsonData);
