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
        sshagent(['ssh-remote]) {
          sh 'ssh -o StrictHostKeyChecking=no -l ubuntu 13.214.196.37 touch test.txt'
        }
      }
    }
  }
}
