# Setup
```bash
curl -Lo minikube https://storage.googleapis.com/minikube/releases/v0.25.2/minikube-darwin-amd64

chmod +x minikube

sudo mv minikube /usr/local/bin/

minikube start --vm-driver=virtualbox

minikube dashboard

curl -Lo kubectl https://storage.googleapis.com/kubernetes-release/release/v1.9.4/bin/darwin/amd64/kubectl

chmod +x kubectl

sudo mv kubectl /usr/local/bin/
```

# Eval
```bash
eval $(minikube docker-env)

```

# Dev
```bash
docker run -d -p 5000:5000 --restart=always --name registry registry:2

cd hello-world-app

docker build . --tag hello-world-app

docker tag hello-world-app localhost:5000/hello-world-app:0.0.1

kubectl create -f hello-world-app.yaml

minikube service hello-world-app --url

```

Full instructions can be found here : https://www.not.expert/blog/local-development-with-kubernetes

