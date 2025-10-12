# 🔐 Final Setup: Enable Content Management

Your Jamstack web publishing system is **95% complete**! Follow these steps to activate the content management interface and start publishing.

## 📋 Checklist Overview

- ✅ **Repository Setup** - Your GitHub repository is configured
- ✅ **Eleventy Build System** - Static site generator is ready
- ✅ **Decap CMS Integration** - Content management system is installed
- ✅ **GitHub Actions Workflow** - Automated deployment is configured
- ⚠️ **OAuth Authentication** - **YOU NEED TO COMPLETE THIS STEP**

---

## 🚨 Step 1: Update Repository Configuration

**CRITICAL**: Before proceeding, you must update the repository reference in your CMS configuration.

1. Open the file `src/admin/config.yml`
2. Find this line:
   ```yaml
   repo: okaluna/web # Replace with your GitHub username/repository-name
   ```
3. Replace `okaluna/web` with your actual GitHub username and repository name
4. Save the file and commit the change

**Example**: If your GitHub username is `johnsmith` and your repository is `my-blog`, change it to:

```yaml
repo: johnsmith/my-blog
```

---

## 🔧 Step 2: Enable GitHub Pages

1. **Go to your GitHub repository**
2. **Click "Settings"** (in the repository, not your account)
3. **Scroll down to "Pages"** in the left sidebar
4. **Under "Source"**, select **"GitHub Actions"**
5. **Save** the settings

This tells GitHub to use your automated workflow for deployment instead of the default Jekyll processing.

---

## 🔐 Step 3: Create GitHub OAuth App

This is the **most critical step**. Decap CMS needs permission to save content to your repository.

### 3.1 Navigate to OAuth Settings

1. **Go to GitHub.com** and log into your account
2. **Click your profile picture** (top right)
3. **Click "Settings"**
4. **Scroll down and click "Developer settings"** (left sidebar, near bottom)
5. **Click "OAuth Apps"**
6. **Click "New OAuth App"**

### 3.2 Fill in OAuth Application Details

**Application name**: `Your Site CMS` (or any name you prefer)

**Homepage URL**: `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME`

- Replace `YOUR-USERNAME` with your GitHub username
- Replace `YOUR-REPOSITORY-NAME` with your repository name
- **Example**: `https://johnsmith.github.io/my-blog`

**Application description**: `Content management for my website` (optional)

**Authorization callback URL**: `https://api.decapcms.org/auth/callback`

- ⚠️ **THIS MUST BE EXACT** - Copy and paste this URL precisely
- This is the Decap CMS service that handles authentication

### 3.3 Complete OAuth Setup

1. **Click "Register application"**
2. **Copy the "Client ID"** that appears (you'll need this next)
3. **Do NOT share the "Client Secret"** - this should remain private

---

## 🔑 Step 4: Configure CMS Authentication

1. **Open** `src/admin/config.yml`
2. **Find these lines**:

   ```yaml
   backend:
     name: github
     repo: your-username/your-repository-name # Make sure this matches your repo
     branch: main
   ```

3. **Add your Client ID** right after the `branch: main` line:

   ```yaml
   backend:
     name: github
     repo: your-username/your-repository-name
     branch: main
     client_id: YOUR_COPIED_CLIENT_ID_HERE
   ```

4. **Remove or comment out** the local development line:

   ```yaml
   # local_backend: true  # Comment this out for production
   ```

5. **Save and commit** this change

---

## 🚀 Step 5: Deploy and Test

1. **Commit all your changes** to the `main` branch
2. **Push to GitHub** - this will trigger the automatic deployment
3. **Wait 2-3 minutes** for GitHub Actions to build and deploy your site
4. **Visit** `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/admin/`
5. **Click "Login with GitHub"**
6. **Authorize the app** when prompted
7. **Start creating content!**

---

## 🎉 Success! You Should Now Be Able To:

- ✅ **Access the admin panel** at `/admin/` on your live site
- ✅ **Log in with your GitHub account**
- ✅ **Create new blog posts** using the web editor
- ✅ **Upload images** through the media library
- ✅ **Edit existing content** including your homepage
- ✅ **See changes go live automatically** within 2-3 minutes

---

## 🔧 Troubleshooting

### "Cannot reach GitHub" or authentication errors:

- Double-check that your `client_id` in `config.yml` is correct
- Verify that the OAuth callback URL is exactly: `https://api.decapcms.org/auth/callback`
- Make sure your repository name in `config.yml` matches your actual repository

### Site not updating after publishing:

- Check the "Actions" tab in your GitHub repository for build status
- Ensure GitHub Pages is set to "GitHub Actions" source
- Wait 3-5 minutes as deployment can take time

### Cannot access `/admin/` page:

- Verify that GitHub Pages is enabled and the site is deployed
- Check that the `src/admin/` folder is included in your repository
- Make sure you're accessing the correct URL format

### "Config file not found":

- Ensure `src/admin/config.yml` exists and is properly formatted
- Check that you've removed the `local_backend: true` line for production

---

## 🆘 Need Help?

If you encounter issues:

1. **Check GitHub Actions logs** - Go to your repo → Actions tab → Click on the latest workflow run
2. **Verify file structure** - Make sure all files are in the correct locations
3. **Double-check OAuth setup** - Most issues stem from incorrect Client ID or callback URL
4. **Test locally first** - Run `npm install && npm run dev` to test the build process

---

## 🏁 Next Steps After Setup

Once everything is working:

- **Delete the sample post** in `src/posts/sample-post.md`
- **Customize your homepage** content through the CMS
- **Upload a logo or favicon** to `src/assets/images/`
- **Customize the design** by editing `src/_includes/base.njk`
- **Add new page types** by extending the CMS configuration

**Happy publishing!** 🎊
