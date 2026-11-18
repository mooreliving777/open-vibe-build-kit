# Zero-subscription deployment lab: GitHub + Netlify

Use a **Netlify Free** account to test before an Open Source plan application. Check the current pricing and stop if your plan displays overage, paid add-ons or credit usage that would violate your budget.

## 1. Prepare a repository

Create a GitHub repository under your personal account. Upload the project files, preserving folders and `.github/workflows/ci.yml`. Set public visibility only when the repository is ready to be truly open source. Do not upload credentials. GitHub Actions tests should pass.

## 2. Deploy the docs site

1. In Netlify, choose **Add new project → Import an existing project** (labels may change).
2. Connect the correct GitHub repository with read access.
3. Use the root `netlify.toml` configuration: no build command, publish folder `site`.
4. Inspect the deployment preview. Confirm the Code of Conduct link, license link and visible Netlify attribution.
5. Publish the site only when reviewed; record the real `*.netlify.app` URL in the repository settings and application checklist.

The documentation site is a static frontend; it **does not deploy** the optional Node API or Supabase examples. Those have independent hosting/security decisions.

## 3. Optional backend learning

Run the Node.js API locally first. Netlify Server Early Access is a separate product and does not guarantee eligibility or free long-running hosting. Verify its current support, limits, billing, and framework constraints directly in Netlify's documentation before deploying.

## 4. Supabase is optional

Review the [Supabase sample](../starters/supabase/README.md), create a separate demo project only if you want one, and never expose a service-role key. Configure a spend cap and review database access policies before sharing an app publicly.

## 5. Apply only after publishing a real project site

See [publishing and application](publishing.md). Netlify may approve or reject the Open Source application; 10,000 credits are not active by default.
