---
title: Production Scheduler
desc: Built and maintain a production-scheduling web app for a plastic injection-molding factory that runs 24/7 and plans work for 1000+ workers. It replaces manual planning with automatic job scheduling, an interactive per-machine Gantt chart, and shift-by-shift output tracking.
date: June 2026 - Present
location: Jakarta, Indonesia
skills: ["React", "TypeScript", "Supabase", "PostgreSQL"]
order: 1
---

## About

I built this for a plastic injection-molding factory in Jakarta that runs 24/7 and plans production for over 1000 workers. The factory has two product lines that plan their work completely differently: one schedules in working days, the other in 8-hour shifts. Instead of building two schedulers, I wrote one scheduling engine that both of them plug into. Move a job, and every job after it on that machine shifts forward or back on its own, skipping holidays and days off.

It's in use every day at the factory, and I'm still adding to it as new needs come up.

## Images

![Screenshot of the scheduler program](/assets/projects/scheduler.png)

## Features

- An interactive Gantt chart for every machine, built from scratch
- Dragging a job that's already started moves its recorded production with it, so the history stays accurate
- Daily shift input that recalculates output, run rate and projected finish dates from the raw entries, so a typo can be fixed after the fact
- Access control enforced in the database with Postgres row-level security, plus a local copy of the database for testing changes before they reach the factory
