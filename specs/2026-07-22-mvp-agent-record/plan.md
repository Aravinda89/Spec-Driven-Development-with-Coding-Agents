# Plan: MVP Agent Record Management

## Goal
Deliver the smallest AgentClinic MVP that matches the roadmap while staying aligned to the mission, the current tech stack, and the branch direction.

## MVP scope
1. Keep the MVP focused on the agent record management feature from the roadmap.
2. Do not include ailment, therapy, or appointment workflows in this first merge-ready slice.
3. Deliver a responsive homepage and dashboard shell that expresses the orange-and-black brand palette.

## Task list
1. Confirm the core data surface for agent records.
   - define the record shape and minimal fields for a first version
   - keep the feature intentionally narrow and easy to validate
2. Add the minimal server-side agent API surface.
   - expose a list endpoint for existing agents
   - expose a create endpoint for new agents
   - keep validation simple and explicit
3. Persist records in SQLite.
   - ensure the agents table exists
   - verify record creation and retrieval work end-to-end
4. Add the minimal responsive UI shell.
   - render a home page and simple dashboard area
   - use Pico CSS with the orange-and-black brand palette
   - keep the layout mobile and desktop friendly
5. Validate the MVP.
   - run the project test suite
   - confirm the static and API surface respond as expected
   - record the success criteria in this folder for merge review
