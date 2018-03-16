# appellofi-front 
[![CircleCI](https://circleci.com/gh/baleen37/appellofi-front/tree/master.svg?style=shield)](https://circleci.com/gh/baleen37/appellofi-front/tree/master)



## Get stared

```bash
docker build . -t appellofi-front
docker run --rm -it -p 3000:3000 appellofi-front
```


## For development


#### Using docker
```
docker build . -t appellofi-front
docker run --rm -it -p 3000:3000 appellofi-front yarn start
```

#### Using yarn
```
yarn install
yarn start
```

## Testing

```bash
docker-compose -f ./docker-compose.test.yml up --build
```


## Deploying

We are serving to [docker hub](https://hub.docker.com/r/baleen37/appellofi-front/)

```bash
docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASS";
docker tag app "baleen37/appellofi-front:${CIRCLE_SHA1}"
docker push "baleen37/appellofi-front:${CIRCLE_SHA1}"
```
