
pipeline{
    agent any

    stages{
        stage('Pipeline 1'){
            steps{
                //Clonar el proyecto
                git url: 'https://github.com/Axors3/Proyecto-DevOps.git',branch: 'dev'

                //Construccion del proyecto
                sh 'npm install'
                //bat 'npm install'

                //Correr test cases
                sh 'npm run test'
                //echo "Todo chido"

            }
        }
        stage('Pipeline 2'){
            steps{
                script {
                    def branchName = env.GIT_BRANCH.replace('/','-').toLowerCase()
                    def imageName = "uadyphone-${branchName}-${env.BUILD_NUMBER}"
                    //Crear Imagen de Docker
                    docker.build(imageName)
                    //Correr Image
                    docker.image(imageName).run("-p 9000:8081")
                }
            }
        }

    }
}

