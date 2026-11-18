# Security basics for learners

- **Secrets**: `.env` is local, not a place to paste into a chat or GitHub issue. Use example variable names in `.env.example` only.
- **Public versus private**: never assume a public React variable is secret. Anything shipped to the browser may be visible to visitors.
- **Supabase**: enable RLS on user-data tables, restrict by authenticated user ID, and test as multiple users. A publishable/anon key is not the same as a service-role key.
- **Backend**: enforce input sizes, validate inputs, rate-limit public endpoints, and secure authorization. The Node API example is intentionally minimal and should not be internet-exposed without hardening.
- **CI**: tests help detect regressions; a passing test suite does not prove safety.
- **Dependencies**: evaluate updates, license compatibility, and known vulnerabilities before production deployments.
- **Budget**: a free plan can still have quotas and resource limitations. Never enable auto-upgrade or paid overage to run this tutorial.

Do not treat the `ovbk audit` tool as a vulnerability scanner, compliance audit, or professional penetration test.
