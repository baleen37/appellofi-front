#!/bin/bash

CLUSTER='default'
FAMILY='appellofi-front'
TASK='appellofi-front'
SERVICE='appellofi-front'

# Login to AWS
aws configure set region ${AWS_REGION}
$(aws ecr get-login)

# Tag and push docker image
docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASS";
docker tag app "baleen37/appellofi-front:${CIRCLE_SHA1}"
docker push "baleen37/appellofi-front:${CIRCLE_SHA1}"

# Create task for docker deploy
task_template='[
{
  "name": "%s",
  "image": "baleen37/appellofi-front:%s",
  "essential": true,
  "memoryReservation": 256,
  "portMappings": [
    {
      "containerPort": 3000,
      "hostPort": 3000
    }
  ],
  "environment" : [
      { "name" : "NODE_ENV", "value" : "production" }
  ]
}
]'
echo "$task_template"
task_def=$(printf "$task_template" ${TASK} ${CIRCLE_SHA1})

# Register task definition
json=$(aws ecs register-task-definition --container-definitions "$task_def" --family "$FAMILY")

# Grab revision # using regular bash and grep
revision=$(echo "$json" | grep -o '"revision": [0-9]*' | grep -Eo '[0-9]+')

# Deploy revision
aws ecs update-service --cluster "$CLUSTER" --service "$SERVICE" --task-definition "$TASK":"$revision"
