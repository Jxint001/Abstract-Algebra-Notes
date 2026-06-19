# Abstract Algebra Notes

This directory is the Quartz publishing repository for public notes.

Website:

```text
https://jxint001.github.io/Abstract-Algebra-Notes/
```

The personal homepage should link to:

```text
https://jxint001.github.io/Abstract-Algebra-Notes/
```

## Source Vault

The Obsidian source vault is outside this repository:

```text
/mnt/e/MyFiles/Research_all/Abstract Algebra/Abstract Algebra
```

Do not edit files in that vault from this repository. The sync script only reads from the vault and copies a public snapshot into `content/`.

## Sync Public Notes

This publishes all root-level Markdown files from the source vault and excludes `.obsidian/`, hidden files, and hidden directories.

`Content.md` is copied to `content/index.md` so it becomes the Quartz home page for the notes site.

```bash
OBSIDIAN_VAULT_PATH="/mnt/e/MyFiles/Research_all/Abstract Algebra/Abstract Algebra" npm run sync:vault
```

## Local Preview

```bash
npm install
npm run sync:vault
npm run dev
```

Quartz will print a local preview URL, normally:

```text
http://localhost:8080
```

## Build

```bash
npm run build
```

The static output is generated in `public/`.

## GitHub Pages Deployment

1. Create a GitHub repository named `Abstract-Algebra-Notes`.
2. Push this directory to that repository's `v5` branch.
3. In the repository settings, set GitHub Pages source to GitHub Actions.
4. Commit the generated `content/` snapshot before pushing, because GitHub Actions cannot access the local Obsidian vault path.
5. Visit:

```text
https://jxint001.github.io/Abstract-Algebra-Notes/
```

Before publishing under a different account or repository name, replace `Jxint001.github.io/Abstract-Algebra-Notes` in `quartz.config.yaml` with the target GitHub Pages base URL, without `https://`.
