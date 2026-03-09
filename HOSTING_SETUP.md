# Hostinger Domain + Vercel Hosting — Setup Guide

**Goal:** Host your Next.js site on Vercel while using your existing Hostinger domain and email.

---

## Overview

This guide walks you through connecting your Hostinger domain to Vercel so your site is hosted on Vercel's fast edge network while you keep your Hostinger plan for domain and email.

**What you'll do:**
1. Deploy your Next.js site to Vercel
2. Add your custom domain in Vercel dashboard
3. Update DNS records in Hostinger to point to Vercel
4. Verify SSL certificate (automatic)

**Time needed:** 10–15 minutes

**What you keep from Hostinger:**
- Your domain name
- Email hosting (`asta@youragency.lt`, etc.)
- Control panel for domain management

**What Vercel provides:**
- Website hosting (Next.js app)
- Automatic deployments from git
- Global edge network (fast worldwide)
- Free SSL certificate
- Preview deployments for every PR

---

## Prerequisites

- [x] Hostinger account with active domain
- [ ] Vercel account (sign up at vercel.com)
- [ ] GitHub account with your Next.js project repo
- [ ] Access to Hostinger DNS management (hPanel or domain registrar)

---

## Step 1: Deploy to Vercel

### 1.1 Push Your Code to GitHub

```bash
# In your project directory (c:\HR\)
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/hr-agency.git
git branch -M main
git push -u origin main
```

### 1.2 Connect Vercel to GitHub

1. Go to [vercel.com](https://vercel.com) and sign up (use GitHub OAuth for easiest setup)
2. Click **"Add New Project"**
3. **Import Git Repository** → Select your `hr-agency` repo
4. Vercel auto-detects Next.js → Click **"Deploy"**
5. Wait 1–2 minutes for first deployment
6. You'll get a temporary URL: `https://hr-agency-xxxxx.vercel.app`

**Test the temporary URL** — your site should be live on Vercel's domain.

---

## Step 2: Add Custom Domain in Vercel

### 2.1 Add Your Domain

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Enter your domain (e.g., `youragency.lt`)
4. Click **Add**
5. Vercel will show DNS configuration instructions

### 2.2 Choose Configuration Type

Vercel will detect if your domain is:
- **Apex domain** (e.g., `youragency.lt`) → requires A record
- **www subdomain** (e.g., `www.youragency.lt`) → requires CNAME

**Recommended:** Add both `youragency.lt` AND `www.youragency.lt`, then set one as primary and redirect the other.

Vercel will provide specific DNS records. Example:

```
A Record:
Name: @
Value: 76.76.21.21

CNAME Record:
Name: www
Value: cname.vercel-dns.com
```

**Don't close this page yet** — you'll need these values in Step 3.

---

## Step 3: Update DNS in Hostinger

### 3.1 Access Hostinger DNS Management

**Option A: If domain is registered with Hostinger**

1. Log in to [hostinger.com](https://hostinger.com)
2. Go to **Domains** in left menu
3. Find your domain and click **Manage**
4. Click **DNS / Name Servers**
5. Ensure **Use Hostinger Name Servers** is selected (if not, switch from "Custom" to Hostinger)

**Option B: If domain is registered elsewhere but hosted on Hostinger**

1. Go to your domain registrar (e.g., GoDaddy, Namecheap)
2. Find DNS management for your domain
3. Follow similar steps (the records will be the same)

### 3.2 Add/Update DNS Records

**Important:** You'll update existing records or add new ones. Do NOT delete all records (you need MX records for email).

#### For Apex Domain (`youragency.lt`):

1. Find any existing **A record** with name `@` or blank
   - If it exists and points to Hostinger IP, **delete it** or **edit it**
   - Change **Value** to Vercel's IP: `76.76.21.21`
   - TTL: 3600 (default)

2. If no A record exists, click **Add Record**:
   - **Type:** A
   - **Name:** `@` (or leave blank, depending on Hostinger's UI)
   - **Value/Points to:** `76.76.21.21`
   - **TTL:** 3600

#### For www Subdomain (`www.youragency.lt`):

1. Find any existing **CNAME record** with name `www`
   - If it exists, **edit it**
   - Change **Value** to: `cname.vercel-dns.com`

2. If no CNAME exists, click **Add Record**:
   - **Type:** CNAME
   - **Name:** `www`
   - **Value/Points to:** `cname.vercel-dns.com`
   - **TTL:** 3600

### 3.3 Preserve Email (MX) Records

**Critical:** Do NOT delete or change MX records. These are needed for Hostinger email to work.

Your MX records should look like:
```
Type: MX
Name: @ (or blank)
Priority: 10
Value: mx1.hostinger.com (or similar)
```

If you accidentally delete them, contact Hostinger support or check [this guide](https://support.hostinger.com/en/articles/1583227-how-to-set-up-mx-records).

### 3.4 Save Changes

1. Click **Save** or **Add Record** for each change
2. DNS changes can take **up to 48 hours** to propagate (usually 15–30 minutes)

---

## Step 4: Verify Domain in Vercel

### 4.1 Check DNS Propagation

1. Go back to Vercel → Settings → Domains
2. Vercel will automatically check DNS every few minutes
3. Once verified, you'll see **"Valid Configuration"** ✅

**If stuck on "Invalid Configuration":**
- Wait 15–30 minutes for DNS to propagate
- Click **Refresh** in Vercel
- Check DNS with tool: [dnschecker.org](https://dnschecker.org)
  - Enter `youragency.lt` and check A record → should show `76.76.21.21`
  - Enter `www.youragency.lt` and check CNAME → should show `cname.vercel-dns.com`

### 4.2 SSL Certificate

Vercel automatically provisions SSL certificate via Let's Encrypt once DNS is verified.

- You'll see **"SSL Certificate Provisioned"** ✅
- This takes 1–5 minutes after DNS verification
- Your site will be accessible via `https://youragency.lt`

### 4.3 Set Primary Domain

1. In Vercel → Settings → Domains
2. You'll see both `youragency.lt` and `www.youragency.lt`
3. Click **"..."** on your preferred domain → **Set as Primary**
4. The other will automatically redirect to the primary

**Recommended:** Use `www.youragency.lt` as primary (better for DNS flexibility).

---

## Step 5: Test Everything

### 5.1 Test Website

Visit in your browser:
- `https://youragency.lt` → should load your site and redirect to primary if needed
- `https://www.youragency.lt` → should load your site
- Both should show 🔒 (SSL valid)

### 5.2 Test Email (Hostinger)

Send a test email to your Hostinger email address (e.g., `asta@youragency.lt`).

**If email doesn't work:**
- Check MX records in Hostinger DNS (see Step 3.3)
- Wait for DNS propagation
- Contact Hostinger support if needed

### 5.3 Test Deployments

1. Make a small change to your code (e.g., edit a heading)
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test deployment"
   git push
   ```
3. Vercel auto-deploys in 30–60 seconds
4. Refresh `https://youragency.lt` → change should appear

---

## Step 6: Configure Environment Variables

In Vercel dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add each variable from your `.env.local`:

```
NEXT_PUBLIC_SITE_URL = https://youragency.lt
CONTACT_EMAIL = asta@youragency.lt
RESEND_API_KEY = re_...
SANITY_PROJECT_ID = your_project_id
SANITY_DATASET = production
```

3. Set **Environments:** Production, Preview, Development (check all three)
4. Click **Save**
5. **Redeploy** your project for variables to take effect:
   - Go to **Deployments** tab
   - Click **"..."** on latest deployment → **Redeploy**

---

## Troubleshooting

### DNS Not Propagating

**Issue:** Vercel shows "Invalid Configuration" after 1 hour.

**Fix:**
1. Check DNS records in Hostinger (see Step 3.2)
2. Use [dnschecker.org](https://dnschecker.org) to verify records worldwide
3. Ensure A record is `76.76.21.21` and CNAME is `cname.vercel-dns.com`
4. If Hostinger uses CloudFlare proxy, disable it (set to "DNS only")
5. Wait another 30 minutes and refresh Vercel

### Email Stopped Working

**Issue:** Email bounces or doesn't arrive after DNS changes.

**Fix:**
1. Check MX records in Hostinger DNS → should NOT have changed
2. If deleted, re-add:
   ```
   Type: MX
   Name: @
   Priority: 10
   Value: mx1.hostinger.com
   ```
3. Check SPF and DKIM records (usually auto-configured by Hostinger)
4. Contact Hostinger support if still broken

### Site Shows "Domain Not Found"

**Issue:** Visiting `youragency.lt` shows Vercel error page.

**Fix:**
1. Verify domain is added in Vercel → Settings → Domains
2. Check DNS propagation (see above)
3. Try incognito/private browser (clear cache)
4. Wait up to 48 hours for global DNS propagation

### SSL Certificate Not Provisioning

**Issue:** "Certificate Pending" for more than 10 minutes.

**Fix:**
1. Ensure DNS is fully verified (A and CNAME records correct)
2. Remove domain from Vercel and re-add it
3. Check for conflicting CAA records in Hostinger DNS (rare)
4. Contact Vercel support if stuck

---

## What You've Accomplished

✅ Your Next.js site is hosted on Vercel (fast edge network, auto-deploys)  
✅ Your Hostinger domain points to Vercel  
✅ SSL certificate auto-renews (Let's Encrypt via Vercel)  
✅ Email continues to work via Hostinger  
✅ No extra cost beyond your existing Hostinger plan  
✅ Every git push auto-deploys to production  

---

## Additional Configuration (Optional)

### Redirect Non-WWW to WWW (or vice versa)

Already handled by Vercel if you set primary domain (see Step 4.3).

### Add Preview Deployments

- Every branch and PR gets its own preview URL
- Example: `https://hr-agency-git-feature-xxxxx.vercel.app`
- Great for testing before merging to main

### Custom Email Sending Domain

If using Resend for contact form, you can verify your domain in Resend for better deliverability:

1. In Resend dashboard → Domains → Add Domain
2. Add TXT and CNAME records to Hostinger DNS (Resend provides values)
3. Verify in Resend
4. Now contact form can send from `website@youragency.lt` instead of generic Resend domain

---

## Next Steps

1. **Verify everything works** (site, email, deployments)
2. **Add environment variables** in Vercel (Step 6)
3. **Start Phase 1 implementation** (see `IMPLEMENTATION_PLAN.md`)
4. **Set up Sanity CMS** (if using CMS for jobs)
5. **Connect Resend** for contact form (see `EXTERNAL_SOLUTIONS.md`)

---

## Support Resources

- **Vercel Docs:** [vercel.com/docs/custom-domains](https://vercel.com/docs/custom-domains)
- **Hostinger DNS Guide:** [support.hostinger.com](https://support.hostinger.com/en/collections/1583220-domains)
- **DNS Checker:** [dnschecker.org](https://dnschecker.org)
- **SSL Checker:** [ssllabs.com/ssltest](https://www.ssllabs.com/ssltest/)

---

**You're all set!** Your hosting is configured for optimal performance with no extra cost. Now you can focus on building the site. 🚀
