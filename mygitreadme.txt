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

 

Remove all tracked files from the working directory ****************************
git rm -r *
git commit -m "Removed all files"

Restore ALL deleted files IF not commited **************************************
git restore --staged .
git restore .

For Delete Fils from Github Not local files
git rm -r --cached .
git commit -m "Remove tracked files from GitHub"
git push origin main

