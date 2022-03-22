import { execSync } from 'child_process'
import detect from 'detect-port'
import { exec, upAll } from 'docker-compose'
import { join } from 'path'

const DB_PORT = 54320

export default async function () {
  console.time('global-setup')

  const isDBReachable = (await detect(DB_PORT)) !== DB_PORT

  if (!isDBReachable) {
    await upAll({
      cwd: join(__dirname),
      log: true,
    })

    await exec('database', ['sh', '-c', 'until pg_isready; do sleep 1; done'], {
      cwd: join(__dirname),
    })

    execSync('npm run test:prisma:deploy') // migrate database
    // execSync('npm run test:prisma:seed') // seed only metadata (not test records)
  }

  console.timeEnd('global-setup')
}
