import { execSync } from 'child_process'
import { down } from 'docker-compose'
import isCI from 'is-ci'

export default async function () {
  if (isCI) {
    down()
  } else {
    execSync('npm run test:prisma:reset')
  }
}
