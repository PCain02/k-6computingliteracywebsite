# Contributing Guidelines

Thank you for your interest in contributing!
Code with Chompers relies on community contributions to grow and stay organized.

Please follow the instructions below carefully when creating a new activity or adding a new curriculum page.

---

## Code of Conduct

We expect all contributors to follow our Code of Conduct, which ensures a welcoming and inclusive environment for everyone. The key points are:

- Be respectful and inclusive in your language and actions
- Accept constructive criticism gracefully
- Focus on what's best for the community and students
- Show empathy towards other community members and the students we serve
- Avoid harassment and discrimination in any form

## Getting Started

### Setting Up Your Environment

1. **Fork the Repository**
   - Click the "Fork" button at the top right of the repository page
   - This creates your own copy of the repository

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/code-with-chompers.git
   cd code-with-chompers
   ```

3. **Install Dependencies**

   - Make sure you have Quarto installed
   - Run `quarto install` to install any required packages

4. **Preview Your Changes**

    - Use `quarto preview` to see your changes live
    - This will start a local server where you can view the site

## How to Add a New Activity or Presentation

1. **Create a New `.qmd` File**

   - Activities go under `activity/`
   - Presentations go under `presentation/`
   - Follow the naming pattern: `##activity.qmd` or `##presentation.qmd`
   - Example: `02activity/02activity.qmd`

2. **Start with the YAML Front Matter**

   At the top of your file, include:

   ```markdown
   ---
   title: "Activity Title"
   subtitle: "Short Description"
   topic: Subject Area
   time_required: "Duration (e.g., 1 hour)"
   categories: ["Topic: Subject", "Time: Duration", "Type: Activity or Presentation"]
   toc: true
   page-layout: full
   ---
   ```

3. **Write the Content**

   After the `---`, you can write the main content:

   - Use `##` for headings
   - Use lists (`-`) for materials, learning outcomes, etc.
   - Include presentation links or PDFs when needed.

   Example:

   ```markdown
   ## Description

   Brief overview of what students will learn.

   ## Materials Required

   - Item 1
   - Item 2

   ## Learning Outcomes

   - Outcome 1
   - Outcome 2

   ## Agenda

   ### Part 1: Introduction
   - Key points to cover

   ### Part 2: Hands-on Activity
   - Steps to follow
   ```

4. **Adding Example Code**

   - Use triple backticks for code snippets.
   - Specify the language (e.g., `cpp` for Arduino code).

## How to Add a New Curriculum Page

Curriculum pages are special and link together multiple weeks of activities and presentations.

1. **Create a New `.qmd` File**

Example: `underwater_robotics.qmd`

2. **Start with the Curriculum YAML Front Matter**

```markdown
---
title: "Curriculum Title"
subtitle: "Short Subtitle"
page-layout: full
toc: true
---
```

3. **Write the Curriculum Overview**

Example:

```markdown
## Overview

Welcome to the **Curriculum Name**, a multi-week program covering XYZ topics.
```


4. **Add Links to Each Week**

Use custom HTML inside your .qmd to create a grid of curriculum weeks:

```markdown
{=html}
<div class="curriculum-section">
  <div class="curriculum-box">
    <a href="01presentation/01presentation.qmd">
      <h3>Week 1: Introduction</h3>
      <p>Summary of Week 1.</p>
    </a>
    <hr style="width: 80%; border: 1px solid #057c3e; margin: 15px 0;">
    <a href="01activity/01activity.qmd">
      <h3>Week 1 Activity</h3>
      <p>Summary of Week 1 Activity.</p>
    </a>
  </div>
  <div class="curriculum-box">
    <a href="02activity/02activity.qmd">
      <h3>Week 2: Continue Learning</h3>
      <p>Summary of Week 2.</p>
    </a>
  </div>
</div>
```

5. **Remember**
 - Every `<a href="">` must link to the correct .qmd file.
 - Use short, clear `<h3>` titles and a `<p>` description inside each box.
 - After all the HTML, continue writing sections like Learning Outcomes, Resources, etc.

6. **Add the curriculum to the main `index.qmd` of the age group**
   - Add a link to the new curriculum page in the main `index.qmd` file.
   - Use the same format as other curriculum links.
   - Example:

```markdown

```{=html}
<div class="curriculum-section">
  <div class="curriculum-box">
    <a href="underwater_robotics.qmd">
      <h3>6 Weeks: Underwater Robotics</h3>
      <p>Learn the basics of underwater robotics with hands-on activities to build your own robot.</p>
    </a>
  </div>
</div>
    ```
```

## Example Folder Structure

```markdown
  01activity/
    01activity.qmd // Activity file
  02activity/
    02activity.qmd // Activity file
  01presentation/
    01presentation.qmd // Presentation file
  underwater_robotics.qmd // Curriculum page
```

## Final Notes
- Always preview your page to check links and formatting.
- Use clear, concise headings and consistent formatting.
- Commit often with meaningful messages when making changes.


## Getting Help

- Open an issue
- Email our advisor Janyl Jumadinova at jjumadinova@allegheny.edu