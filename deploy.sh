set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ulivz/vuepress-492.git master:gh-pages

cd -
