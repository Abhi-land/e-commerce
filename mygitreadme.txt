git init
git branch -M main
git remote remove origin  # only if it already exists
git remote add origin https://github.com/Abhi-land/e-commerce.git
git add .
git commit -m "Initial commit"
git push -u origin main



Daily Git update commands
git add .
git commit -m "update"
git push


If someone else also works on the repo
git pull
git add .
git commit -m "update"
git push