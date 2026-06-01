# Start here, David 👋

This is the project for your website, **thevegancounsellor.com**. You don't need to know how to
code — you'll build the whole site by *talking* to Claude Code, the same way you already chat
with AI. This page tells you everything you need to get going.

---

## The big picture

Three things work together:

1. **This folder on your computer** — all the website's files live here.
2. **GitHub** — an online backup that everyone shares. When you "push", your changes go here.
3. **Vercel** — the service that turns the files into the live website. The moment your changes
   reach GitHub's `main` branch, Vercel rebuilds the live site automatically (about a minute).

Your job is just the first box: ask Claude to change the website, check it looks right, then
"save and publish". Claude handles the rest.

---

## Before your first session

A couple of things Dean sets up for you first (you can't do these yourself):

- You have a **GitHub account**, and Dean has **invited you to the project** (check your email
  for a GitHub invite and click *Accept*).
- The **Claude desktop app** is installed and you're signed in.

You do **not** need to install anything else by hand. Your computer probably hasn't been set up
for building websites before — that's fine. Claude will install whatever's missing for you in
the first session below. You'll never type terminal commands yourself; Claude runs them, and just
pauses when it needs you to type your computer password or click an "Allow" button.

## Your very first session — copy this in

1. In the Claude app, open the **Claude Code** panel.
2. Make a **new empty folder** for the website (for example, a folder called `thevegancounsellor`
   inside your Documents), and **open that folder** in the Claude Code panel.
3. Paste the prompt below and send it. Then just follow along and do what Claude asks.

> **Heads-up:** this first setup can take 10–20 minutes and you'll be asked for your computer
> password once or twice — that's normal. You only ever do this once.

```text
Hi Claude! I'm David, and I'm not technical — this is my first time using you, and my
computer has probably never been set up for building websites. Please set everything up
for me, one step at a time, explaining each step in plain English. Whenever you need me
to type my computer password or click an "Allow"/"Install" button, stop and tell me
exactly what to do.

Here's the goal: get my website project onto this computer and running, so I can start
editing it just by talking to you.

Please do this in order:
1. Check what's already installed (git, Node.js, and the GitHub CLI "gh") and tell me
   what's missing.
2. Install anything that's missing, using the right method for my operating system.
3. Help me sign in to GitHub by running "gh auth login" — I already have an account and
   I've been invited to the project. Walk me through the browser sign-in.
4. Clone my project into this current folder:
   https://github.com/mrdbee/thevegancounsellor.git
   (clone it into the folder I already have open, so the files land right here.)
5. Install the project's dependencies (npm install).
6. Start the website on my computer and show me a screenshot so I know it's working.
7. Read the files START-HERE-DAVID.md and AGENTS.md so you understand the project and
   the way David and Dean work together.

Go slowly, and stop and ask me whenever you need something. Thanks!
```

Once that finishes, you're fully set up — and you never repeat it. From here on, just open the
same folder in the Claude Code panel and start talking. Claude reads the project guide
automatically, so it always knows what the site is and how it's built.

---

## Your everyday workflow

Whenever you want to change something, follow this loop:

1. **Ask.** Describe what you want in plain English. Be specific about wording and feel.
2. **Look.** Ask Claude to *"show me what it looks like"* — it can open the site and screenshot
   it. Tell it what to adjust until you're happy.
3. **Preview.** Say: *"save and publish this"*. Claude puts your change on a **private preview
   link** first (a real copy of the site that the public can't see) and gives you the link.
   Open it and check it on your phone or computer.
4. **Go live.** Once you're happy with the preview, tell Claude *"looks good, make it live"*.
   The real website updates within a minute or two.

You don't need to memorise any commands — just talk. The phrases above are enough. Behind the
scenes Claude keeps your work separate from Dean's so you two never clash — you don't have to
think about any of that.

> **Why the preview step?** The live site is what your clients see. The preview link lets you
> (and Dean, if you want a second opinion) check a change on a real page *before* it goes public.
> Nothing reaches the live site until you say "make it live".

---

## Good first things to try

Copy any of these straight into Claude Code:

- *"Build an 'About' page that introduces me. Ask me the questions you need first, then write
  it. Add a link to it in the site menu."*
- *"Add a top navigation bar with links to Home, About, Services, Media and Blog. Style it to
  match the green theme."*
- *"Create a 'Services' page that explains one-on-one counselling sessions and has a 'Book a
  session' button. Leave the booking link as a placeholder for now — I'll add the real one."*
- *"Change the wording on the homepage to say ..."* (give it the exact words you want).
- *"I want to add a photo of me to the homepage."* (Claude will tell you where to put the image
  file, then wire it in.)

---

## Helpful habits

- **Talk in outcomes, not code.** "Make the booking button bigger and warmer" works better than
  guessing at technical terms.
- **Review before publishing.** Always ask to *see* it first. Publishing puts it on the real
  website.
- **One thing at a time.** Smaller requests are easier to check and undo.
- **It's safe to experiment.** Everything is backed up in GitHub. If something looks wrong, say
  *"undo that"* or *"go back to how it was"* and Claude can roll it back.
- **Real details only.** For pricing, qualifications, or contact info, give Claude the real
  facts — don't let it guess on your behalf.

---

## If something breaks

Just tell Claude what you saw: *"the page is showing an error"* or *"the live site didn't
update"*. Describe it plainly and let Claude diagnose it. If you're ever unsure, message Dean —
he handles the GitHub and Vercel side.

Welcome aboard. Start by saying hello to Claude and asking it to build your About page. 🌱
