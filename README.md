# bigdata2017
Big Data project 2017 INFO 7250

# Command for ec2 instance

$ sudo yum update -y

$ sudo yum install -y docker

$ sudo service docker start

# Adding ec2-user to the docker group

$ sudo usermod -a -G docker ec2-user

# Running the docker-image

docker pull vinaygor/bigdata2017
