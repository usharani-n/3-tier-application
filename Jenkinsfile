pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/usharani-n/3-tier-application.git'
            }
        }

        stage('Frontend Build') {
            steps {
                sh 'cd frontend && echo "Frontend build completed"'
            }
        }

        stage('Backend Build') {
            steps {
                sh 'cd backend && echo "Backend build completed"'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Deployment') {
            steps {
                echo 'Deploying application...'
            }
        }

        stage('Verification') {
            steps {
                echo 'Verifying application...'
            }
        }
    }
}