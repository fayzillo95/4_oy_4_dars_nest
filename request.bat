curl -X PATCH http://localhost:15975/users/update/2 \
 -H "Content-Type: application/json" \
 -d '{"username":"Updated"}' \
 -o response.json


curl -X GET http://localhost:15975/users  -o response.json