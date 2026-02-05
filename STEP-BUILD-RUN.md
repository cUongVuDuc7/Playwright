# Setup
### 1. Check node đã install : npm -v;  node -v
### 2. Create project folder, init npm : npm init -y
### 3. Install playwright: npm init playwright@latest
### 4. Install browser: npx playwright install
### 5. Create tests/demo.spec.ts
### 6. Run all test: npx playwright test




# Usage: npx playwright [options] [command]

### Options:
  -V, --version                          output the version number
  -h, --help                             display help for command

### Commands:
  open [options] [url]                   open page in browser specified via -b, --browser
  codegen [options] [url]                open page and generate code for user actions
  install [options] [browser...]         ensure browsers necessary for this version of Playwright are installed
  uninstall [options]                    Removes browsers used by this installation of Playwright from the system (chromium, firefox, webkit, ffmpeg). This
                                         does not include branded channels.
  install-deps [options] [browser...]    install dependencies necessary to run browsers (will ask for sudo permissions)
  cr [options] [url]                     open page in Chromium
  ff [options] [url]                     open page in Firefox
  wk [options] [url]                     open page in WebKit
  screenshot [options] <url> <filename>  capture a page screenshot
  pdf [options] <url> <filename>         save page as pdf
  show-trace [options] [trace]           show trace viewer
  test [options] [test-filter...]        run tests with Playwright Test
  show-report [options] [report]         show HTML report
  merge-reports [options] [dir]          merge multiple blob reports (for sharded tests) into a single report
  clear-cache [options]                  clears build and test caches
  init-agents [options]                  Initialize repository agents
  help [command]                         display help for command