---
isOriginal: true
category:
  - Tips and Tricks
tag:
  - Github
  - Sync
---

# Syncing Scripts to Github

The following steps are based on Prism Launcher:

1. Backup `.minecraft`;
2. Clear the existing `.minecraft`;
3. Enter `git clone "repository URL" .` in `.minecraft`;
4. Put the files from the backup `.minecraft` back into `.minecraft`, choose to overwrite or keep existing files as needed;
5. Add the following files:
    - `.minecraft/.gitignore`
      ```
      *
      !.gitignore
      !kubejs/      
      ```
    - `.minecraft/kubejs/.gitignore`
      ```
      !*
      probe/
      ```