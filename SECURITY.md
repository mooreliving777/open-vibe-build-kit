# Security policy

This is an educational toolkit, not a hosted user service. Report possible vulnerabilities privately via the repository's GitHub Security tab, if enabled. Until private reporting is configured, do not post exploit details, access credentials, or personal data publicly. The maintainers will aim to acknowledge reports and prioritize risk, but no SLA is promised.

## Responsible use

- No secrets in git or source templates; use local `.env` files excluded by `.gitignore`.
- Avoid committing screenshots showing tokens or customer information.
- Review dependency updates and run tests before any deployment.
- Enable multi-factor authentication in GitHub, Netlify and Supabase.
- Apply RLS and least privilege on every Supabase table.
- Do not put Supabase service-role or secret keys in browser code.

The CLI's `audit` command is a beginner-oriented checklist, **not a security scanner** and cannot guarantee production safety.