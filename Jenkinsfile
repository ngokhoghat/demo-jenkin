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
        sshPublisher(publishers: [sshPublisherDesc(configName: 'Myserver', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'sudo cp index.html /var/www/html/', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'index.html')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
      }
    }
  }
}
