pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/DenisDimitrovv/ValorantQuiz.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t mywebapp:latest .'
            }
        }

        stage('Deploy New Container') {
            steps {
                sh '''
                docker stop mywebapp || true
                docker rm mywebapp || true
                docker run -d --name mywebapp -p 80:80 mywebapp:latest
                '''
            }
        }
    }
}
