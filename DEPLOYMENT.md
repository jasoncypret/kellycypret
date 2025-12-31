# Deployment Guide: Netlify + Decap CMS

This guide walks through deploying the Kelly Cypret Real Estate website to Netlify and setting up Decap CMS for content editing.

## Prerequisites

- GitHub account
- Repository pushed to GitHub
- Netlify account (can sign up during deployment)

## Step 1: Create Netlify Site

1. Go to [netlify.com](https://www.netlify.com) and sign in (or sign up) using your GitHub account
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub repositories
5. Select the `kellycypret` repository
6. Netlify will auto-detect build settings from `netlify.toml`:
   - Build command: `yarn build`
   - Publish directory: `_site`
   - Node version: 18
7. Click **"Deploy site"**

## Step 2: Enable Netlify Identity

1. In your Netlify site dashboard, go to **Site settings** → **Identity**
2. Click **"Enable Identity"**
3. Under **Registration preferences**, select **"Invite only"** (recommended for CMS access)
4. Scroll down and click **"Save"**

## Step 3: Enable Git Gateway

1. Still in **Site settings** → **Identity**, scroll to **"Services"**
2. Find **"Git Gateway"** and click **"Enable Git Gateway"**
3. This allows the CMS to commit changes to your repository

## Step 4: Configure Custom Domain (Optional)

1. In your Netlify site dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name (e.g., `kellycypret.com`)
4. Follow Netlify's DNS configuration instructions:
   - Add the provided DNS records to your domain registrar
   - Wait for DNS propagation (can take up to 48 hours)
5. Netlify will automatically provision an SSL certificate

## Step 5: Invite Content Editors

1. Go to **Site settings** → **Identity** → **Invite users**
2. Enter the email address of the content editor
3. Click **"Send invite"**
4. The user will receive an email to set up their account
5. Once they accept, they can log in at `https://your-site.netlify.app/admin`

## Step 6: Access CMS

1. Navigate to `https://your-site.netlify.app/admin`
2. Click **"Log in with Netlify Identity"**
3. Enter credentials (or use the invite link if first time)
4. You should now see the CMS dashboard with three collections:
   - **Blog Posts**
   - **Testimonials**
   - **Featured Listings**

## Step 7: Test CMS Functionality

1. **Create a test blog post:**
   - Click **"Blog Posts"** → **"New Blog Post"**
   - Fill in the required fields (title, date, summary, body)
   - Click **"Save"** → **"Publish"**
   - This will create a commit in your GitHub repository

2. **Verify automatic deployment:**
   - After publishing, Netlify will automatically detect the commit
   - Go to **Deploys** tab to see the new build
   - Once complete, your new blog post should appear on the live site

3. **Edit existing content:**
   - Click on any existing item in a collection
   - Make changes and save
   - Changes will be committed and trigger a rebuild

## Troubleshooting

### CMS Not Loading
- Verify Netlify Identity is enabled
- Check that Git Gateway is enabled
- Ensure you're logged in with a user who has been invited

### Build Failures
- Check build logs in Netlify dashboard
- Verify `yarn build` works locally
- Ensure all dependencies are in `package.json`

### Git Gateway Errors
- Verify the repository is connected correctly
- Check that the branch name matches (default is `main`)
- Ensure Netlify has proper GitHub permissions

### Custom Domain Issues
- Verify DNS records are correct
- Wait for DNS propagation (can take 24-48 hours)
- Check SSL certificate status in Netlify dashboard

## Post-Deployment Checklist

- [ ] Site deploys successfully
- [ ] `/admin` route is accessible
- [ ] Netlify Identity login works
- [ ] Git Gateway is enabled
- [ ] Content editors can log in
- [ ] Blog posts can be created via CMS
- [ ] Testimonials can be edited via CMS
- [ ] Listings can be edited via CMS
- [ ] CMS changes create GitHub commits
- [ ] Commits trigger automatic rebuilds
- [ ] Custom domain is connected (if applicable)
- [ ] SSL certificate is active

## Support

For issues with:
- **Netlify**: Check [Netlify documentation](https://docs.netlify.com/)
- **Decap CMS**: Check [Decap CMS documentation](https://decapcms.org/docs/)
- **Eleventy**: Check [Eleventy documentation](https://www.11ty.dev/docs/)

