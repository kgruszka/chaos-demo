PREPARE

cd chaos && . ./setup.sh && cd ../ && clear

SCENARIO 1

make failing-up

docker stop jokes-api # failure
docker start jokes-api # rollback

make chaos-run # chaostoolkit

make failing-down

SCENARIO 2

make resilient-up

docker stop jokes-api # failure
docker start jokes-api # rollback

make chaos-run # chaostoolkit

make resilient-down