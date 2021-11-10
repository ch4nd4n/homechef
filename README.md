## Dev Notes

```sh
docker build -t ch4nd4n/homechef-menu -f Dockerfile.menu .
docker run -d --rm -p 3000:3000 --env-file .env --name homechef-menu ch4nd4n/homechef-menu
docker push ch4nd4n/homechef-menu
```