# [![OnEarly Status](https://raw.githubusercontent.com/OnEarly/status/master/assets/logomark-dark.svg)](https://status.onearly.com)

The public status page for OnEarly services: **<https://status.onearly.com>**

## How it works

This is a **hand-maintained** status page. It does **not** automatically
monitor OnEarly services — there is no uptime robot behind it anymore.

- The published page lives on the [`gh-pages`](../../tree/gh-pages) branch and
  is served via GitHub Pages at [status.onearly.com](https://status.onearly.com).
- To post or clear an incident, edit `index.html` on `gh-pages`. That file
  carries step-by-step instructions in a comment at the bottom; GitHub Pages
  redeploys automatically (usually live within a minute).

## History

This repository previously ran [Upptime](https://upptime.js.org), a GitHub
Actions–based uptime monitor. It was retired in July 2026: the monitor's
prebuilt native binary stopped loading after GitHub moved Actions runners to
Node 24, so every scheduled run failed. Rather than keep a self-updating
monitor nobody watched, we replaced it with a static page.

Historical uptime data collected while Upptime was running is preserved under
[`history/`](./history) and [`api/`](./api) for reference. The monitoring
workflows have been removed.

## Contact

For support, email [support@onearly.com](mailto:support@onearly.com).
