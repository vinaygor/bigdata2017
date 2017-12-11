# bigdata2017
Big Data project 2017 INFO 7250

# Command for ec2 instance

$ sudo yum update -y

$ sudo yum install -y docker

$ sudo service docker start

# Adding ec2-user to the docker group

$ sudo usermod -a -G docker ec2-user

# Pulling the docker-image

docker pull vinaygor/bigdata2017

# Running the docker-image

docker run -p 8888:8888 vinaygor/bigdata2017

# Presentation

https://prezi.com/view/rFpDviPl4U7NmLzF3Lte/
