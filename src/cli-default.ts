#!/usr/bin/env node
import { main } from './cli-main'

main().catch((e) => {
  console.error(e)
})
