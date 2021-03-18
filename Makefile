chaos-run:
	cd chaos && chaos run --rollback-strategy=always experiment.json || true && cd ../

failing-up:
	docker-compose -f docker-compose.failure.yaml up --build

failing-down:
	docker-compose -f docker-compose.failure.yaml down

resilient-up:
	docker-compose -f docker-compose.resilient.yaml up --build

resilient-down:
	docker-compose -f docker-compose.resilient.yaml down
