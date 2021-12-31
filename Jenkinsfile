pipeline {
  agent any
  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/ngokhoghat/demo-jenkin.git'
      }
    }
    stage('SSH server') {
      steps {
        sshagent(['ssh-remote']) {
          sh 'ssh -o StrictHostKeyChecking=no -l ubuntu 18.138.34.38 touch test.txt'
        }
      }
    }
  }
}
